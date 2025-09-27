const teamMembers = [
    {
        name: "Michal Balogh",
        github: "misobalogh",
        role: "[Role/Responsibility]",
        specialty: "ML/AI Engineer"
    },
    {
        name: "Juraj Hušek",
        github: "JurajHusek",
        role: "[Role/Responsibility]",
        specialty: "Backend Developer"
    },
    {
        name: "Ján Osadský",
        github: "janci-osadsky",
        role: "[Role/Responsibility]",
        specialty: "Backend Developer"
    },
    {
        name: "Fridrich Molnár",
        github: "xmolnarf1",
        role: "[Role/Responsibility]",
        specialty: "Frontend Developer"
    },
    {
        name: "Zoltán Renczes",
        github: "Zoli17",
        role: "[Role/Responsibility]",
        specialty: "Frontend Developer"
    }
];

function createTeamMemberComponent(name, github, role, specialty) {
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card team-card h-100">
                <div class="card-body text-center">
                    <a href="https://github.com/${github}" target="_blank" class="text-decoration-none">
                        <img src="https://github.com/${github}.png?size=100"
                             alt="${name}"
                             class="rounded-circle mb-3"
                             width="80" height="80">
                    </a>
                    <h5 class="card-title">
                        <a href="https://github.com/${github}" target="_blank" class="text-decoration-none text-dark">
                            ${name}
                        </a>
                    </h5>
                    <p class="card-text text-muted">${role}</p>
                    <p class="card-text"><small class="text-muted">${specialty}</small></p>
                    <a href="https://github.com/${github}" target="_blank" class="btn btn-outline-dark btn-sm">
                        <i class="bi bi-github"></i> GitHub
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Initialize team members when DOM is loaded into #team .row
document.addEventListener('DOMContentLoaded', function () {
    const teamContainer = document.querySelector('#team .row');
    if (teamContainer) {
        teamContainer.innerHTML = teamMembers.map((member, index) =>
            createTeamMemberComponent(member.name, member.github, member.role, member.specialty, index)
        ).join('');
    }
});
