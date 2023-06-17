# Click-N-Buy
Shopping cart built with MERN &amp; Redux

<h1> Click N Buy eCommerce Platform </h1>

<h2> Features </h2>
<ul>
  <li>Full featured shopping cart</li>
  <li>Product reviews and ratings</li>
  <li>Product reviews and ratings</li>
  <li>Admin product management</li>
  <li>Admin user management</li>
  <li>Admin Order details page</li>
  <li>Mark orders as delivered option</li>
  <li>Checkout process (shipping, payment method, etc)</li>
  <li>PayPal / credit card integration</li>
  <li>Database seeder (products & users)</li>
</ul>

<h2> Usage </h2>
<h3> ES Modules in Node </h3>

<p>We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.</p>
<p>Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error</p>
<p>You can also install and setup Babel if you would like</p>

<h3> Env Variables </h3>

<p>Create a .env file in then root and add the following</p>

<div class="snippet-clipboard-content notranslate position-relative overflow-auto">
  <pre class="notranslate">
  <code>
    NODE_ENV = development
    PORT = 5000
    MONGO_URI = your mongodb uri
    JWT_SECRET = 'abc123'
    PAYPAL_CLIENT_ID = your paypal client id
  </code>
  </pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id" tabindex="0" role="button" style="display: inherit;">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
 
<h3> Install Dependencies (frontend & backend) </h3>

<div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code>npm install
cd frontend
npm install
</code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="npm install
cd frontend
npm install" tabindex="0" role="button" style="display: inherit;">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
  
<h3> Run </h3>

<div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code># Run frontend (:3000) &amp; backend (:5000)
npm run dev

=> Run backend only
npm run server
=> Run frontend only
npm start </code></pre>
</div>
  
<h3> Seed Database </h3>

<p>You can use the following commands to seed the database with some sample users and products as well as destroy all data</p>

<div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code># Import data
npm run data:import 
=> Destroy data
npm run data:destroy</code></pre>
</div>
