import { heroSvg } from "./herosvg.js";

export const landingPage = `<div class="landing-body">
    <nav class="nav">
        <div class="nav-logo">Min.Url</div>
      <div class="nav-info">
        <span class="nav-info-features">Features</span>
        <span class="nav-info-resources">Resources</span>
      </div>
      <div class="nav-user">
        <span class="nav-user-login">Login</span>
        <span class="nav-user-signup">Sign Up</span>
      </div>
    </nav>
    <header class="hero">
    <div class="hero-svg">${heroSvg}</div>
      <div class="hero-text">
        <h1 class="hero-text-header">Short Links <br> Big Results</h1>
        <p class ="hero-text-body">Shorten, store and share links to your products and services with our all-in-one solution!</p>
      </div>
      <button class="hero-btn">Get Started</button>
    </header>
    <section class="form-container">
        <form class="form-control">
            <input type="url" name="form-link" id="form-link">
            <input type="submit" value="Shorten it!" />
        </form>
    </section>
    <section class="info-section">
        <h2 class="info-section-header">Advanced Toolkit</h2>
        <p class="info-section-text">Manage all your operations with our advanced toolkit dashboard (Must be Logged in).</p>
        <ul class="info-section-bullets">
            <li class="info-section-bullet">
                <article class="info-section-point">
                    <div class="point-icon"></div>
                    <div class="point-text">
                        <h3 class="point-text-header">Shorten</h3>
                        <p class="point-text-body">Sharing unnecessarily bloated links can be a hassle, not just for you but for your customers also. So drop the weight and let us do the heavy lifting for you!</p>
                    </div>
                </article>
            </li>
            <li class="info-section-bullet">
                <article class="info-section-point">
                    <div class="point-icon"></div>
                    <div class="point-text">
                        <h3 class="point-text-header">Save</h3>
                        <p class="point-text-body">Every link shortened is stored in your accounts dashboard. Hence, You only need to use the shortening form once for each link!</p>
                    </div>
                </article>
            </li>
            <li class="info-section-bullet">
                <article class="info-section-point">
                    <div class="point-icon"></div>
                    <div class="point-text">
                        <h3 class="point-text-header">Share</h3>
                        <p class="point-text-body">Distribute your Links to basically any social media platform available in one-click. So you never have to leave your dashboard!</p>
                    </div>
                </article>
            </li>
            <li class="info-section-bullet">
                <article class="info-section-point">
                    <div class="point-icon"></div>
                    <div class="point-text">
                        <h3 class="point-text-header">Scratch</h3>
                        <p class="point-text-body">Delete obsolete links in order to reduce clutter on your dashboard, in order to maintain a minimal and efficient workspace!</p>
                    </div>
                </article>
            </li>
        </ul>
    </section>
    <section class="boost-container">
         <div class="boost">
            <h2 class="boost-header">Boost your links today</h2>
            <button class="boost-btn">Get Started</button>
         </div>
    </section>
    <footer class="footer">
        <div class="footer-logo"></div>
        <div class="footer-socials"></div>
    </footer>
  </div>`;
