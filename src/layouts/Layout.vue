<template>
    <div>
        <header class="bg-white border-bottom shadow-sm">
            <nav class="navbar navbar-expand-lg container">
                <RouterLink to="/" class="navbar-brand text-primary fw-bold">ResumeHer</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">首頁</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/blog" class="nav-link">部落格</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/contact" class="nav-link">聯絡我們</RouterLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <main>
            <slot />
        </main>

        <footer class="bg-secondary text-center py-3 text-dark mt-5">
            <small>&copy; 2025 ResumeHer. All rights reserved.</small>
        </footer>
    </div>
</template>