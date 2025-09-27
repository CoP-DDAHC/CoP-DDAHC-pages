// Meeting minutes management class
class MeetingMinutes {
    constructor() {
        this.minutesContainer = document.getElementById('minutes-container');
        this.modal = new bootstrap.Modal(document.getElementById('minutesModal'));
        this.modalTitle = document.getElementById('minutesModalLabel');
        this.modalBody = document.getElementById('minutesModalBody');
        this.currentMarkdownContent = '';
        this.currentFilename = '';
        this.loadMinutes();
    }

    /**
     * Load minutes index and render cards
     */
    async loadMinutes() {
        try {
            const response = await fetch('minutes/minutes.json');
            if (!response.ok) {
                throw new Error('Cannot load minutes index');
            }
            const minutesIndex = await response.json();

            // Sort by date - newest first
            minutesIndex.sort((a, b) => new Date(b.date) - new Date(a.date));

            this.renderCards(minutesIndex);
        } catch (error) {
            console.error('Error loading minutes:', error);
        }
    }

    /**
     * Render meeting minutes as cards
     */
    renderCards(minutesIndex) {
        const cardsHTML = minutesIndex.map((minute, index) => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card minutes-card h-100" data-index="${index}" onclick="meetingMinutes.openModal('${minute.file}', '${minute.title}', '${minute.date}')">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <div class="meeting-date">
                                <i class="bi bi-calendar-event text-primary"></i>
                                <strong>${this.formatDate(minute.date)}</strong>
                            </div>
                        </div>
                        <h5 class="card-title">${minute.title}</h5>
                        <p class="card-text text-muted">
                            <i class="bi bi-eye"></i>
                            Click to view meeting details
                        </p>
                    </div>
                </div>
            </div>
        `).join('');

        this.minutesContainer.innerHTML = `
            <div class="row d-flex flex-nowrap">
                ${cardsHTML}
            </div>
        `;
    }

    /**
     * Format date for display
     */
    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('sk-SK', options);
    }

    /**
     * Open modal with meeting minutes content
     */
    async openModal(filename, title, date) {
        // Store current filename for download
        this.currentFilename = filename;

        // Update modal title
        this.modalTitle.innerHTML = `
            <i class="bi bi-journal-text"></i>
            ${title} - ${this.formatDate(date)}
        `;

        // Show modal
        this.modal.show();

        // Load content
        try {
            const response = await fetch(`minutes/${filename}`);
            if (!response.ok) {
                throw new Error(`Cannot load ${filename} (${response.status})`);
            }

            const markdownContent = await response.text();
            // Store markdown content for download
            this.currentMarkdownContent = markdownContent;

            // Check if marked is available
            if (typeof marked === 'undefined') {
                throw new Error('Marked.js library is not loaded');
            }

            // Configuration of marked library
            marked.setOptions({
                breaks: true,
                gfm: true,
                tables: true,
                sanitize: false
            });

            const htmlContent = marked.parse(markdownContent);

            // Display content of the modal
            this.modalBody.style.opacity = '0';
            setTimeout(() => {
                this.modalBody.innerHTML = `<div class="meeting-content">${htmlContent}</div>`;
                this.modalBody.style.transition = 'opacity 0.3s ease';
                this.modalBody.style.opacity = '1';
            }, 150);

        } catch (error) {
            console.error('Error loading minute content:', error);
        }
    }

    /**
     * Download current meeting minutes as markdown file
     */
    downloadCurrentMinutes() {
        if (!this.currentMarkdownContent || !this.currentFilename) {
            console.error('No meeting minutes content available for download');
            return;
        }

        try {
            // Create blob with markdown content
            const blob = new Blob([this.currentMarkdownContent], {
                type: 'text/markdown;charset=utf-8'
            });

            // Create download link
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = this.currentFilename;

            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up object URL
            window.URL.revokeObjectURL(url);

            // Show success feedback
            const downloadBtn = document.getElementById('downloadMinutesBtn');
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<i class="bi bi-check"></i> Downloaded';
            downloadBtn.classList.remove('btn-primary');
            downloadBtn.classList.add('btn-success');

            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
                downloadBtn.classList.remove('btn-success');
                downloadBtn.classList.add('btn-primary');
            }, 2000);

        } catch (error) {
            console.error('Error downloading file:', error);
            const downloadBtn = document.getElementById('downloadMinutesBtn');
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<i class="bi bi-x"></i> Error';
            downloadBtn.classList.remove('btn-primary');
            downloadBtn.classList.add('btn-danger');

            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
                downloadBtn.classList.remove('btn-danger');
                downloadBtn.classList.add('btn-primary');
            }, 2000);
        }
    }
}


// Global variablesa
let meetingMinutes;

// Initialize meeting minutes component on DOM loaded
document.addEventListener('DOMContentLoaded', function () {
    meetingMinutes = new MeetingMinutes();
});
