// Assignment download functionality
async function downloadAssignment() {
    try {
        // Load assignment content from file
        const response = await fetch('assignment.md');
        if (!response.ok) {
            throw new Error(`Failed to load assignment file: ${response.status} ${response.statusText}`);
        }

        let assignmentContent = await response.text();

        // Create blob with markdown content
        const blob = new Blob([assignmentContent], { type: 'text/markdown;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);

        // Create temporary download link
        const link = document.createElement('a');
        link.href = url;
        link.download = 'CoP-DDAHC-Assignment.md';
        link.style.display = 'none';

        // Trigger download
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

    } catch (error) {
        console.error('Error downloading assignment:', error);
    }
}
