import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'http://localhost:4173/';
const SCREENSHOTS_DIR = 'C:\\Users\\Akalanka\\Desktop\\Web Development\\wgi-website\\test-screenshots';

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

async function takeScreenshot(page, filename) {
  const filePath = path.join(SCREENSHOTS_DIR, filename);
  try {
    const buffer = await page.screenshot({ fullPage: true });
    fs.writeFileSync(filePath, buffer);
  } catch {
    await new Promise(r => setTimeout(r, 400));
    const buffer = await page.screenshot({ fullPage: true });
    fs.writeFileSync(filePath, buffer);
  }
}

async function runTests() {
  console.log('🚀 Starting Comprehensive Automated Multi-Tab & Responsive Tests...');
  const results = {
    consoleErrors: [],
    failedRequests: [],
    tests: [],
  };

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Listen to console errors and network failures
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      results.consoleErrors.push(msg.text());
    }
  });

  page.on('requestfailed', (req) => {
    // Ignore non-critical aborted requests or favicon
    if (!req.url().includes('favicon.ico')) {
      results.failedRequests.push(`${req.url()}: ${req.failure()?.errorText}`);
    }
  });

  try {
    // -------------------------------------------------------------
    // 1. DESKTOP TESTS (1440 x 900)
    // -------------------------------------------------------------
    console.log('\n--- 1. DESKTOP VIEWPORT TESTS (1440x900) ---');
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(URL, { waitUntil: 'networkidle0' });

    // Test 1.1: Document Title
    const title = await page.title();
    console.log(`✓ Page Title: "${title}"`);
    results.tests.push({ name: 'Page Title Check', pass: title.includes('WGI Solutions') });

    // Test 1.2: Horizontal Overflow Check
    const desktopOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log(`✓ Desktop Horizontal Overflow: ${desktopOverflow ? 'FAIL (Overflow)' : 'PASS (No Overflow)'}`);
    results.tests.push({ name: 'Desktop Zero Horizontal Overflow', pass: !desktopOverflow });

    // Test 1.3: Navigation Tabs Count on Desktop
    const desktopTabsCount = await page.evaluate(() => {
      const tabs = document.querySelectorAll('nav[aria-label="Desktop Navigation Tabs"] button');
      return tabs.length;
    });
    console.log(`✓ Desktop Navigation Tabs Count: ${desktopTabsCount} (Expected 7)`);
    results.tests.push({ name: 'Desktop Navigation Tabs Count', pass: desktopTabsCount === 7 });

    // Test 1.4: Tab Switching to "About Us" and Verification of Mission & Vision
    console.log('\n--- Testing "About Us" Tab Navigation & Corporate Identity ---');
    await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('nav[aria-label="Desktop Navigation Tabs"] button'));
      const aboutTab = tabs.find(t => t.textContent?.includes('About Us'));
      aboutTab?.click();
    });
    await new Promise(r => setTimeout(r, 400));

    const aboutVerification = await page.evaluate(() => {
      const bodyText = document.body.innerText;
      const hasMission = bodyText.includes('Our Corporate Mission');
      const hasVision = bodyText.includes('Our Strategic Vision');
      const hasZeroFailure = bodyText.includes('Zero-Failure Data Integrity');
      const hasPartnership = bodyText.includes('Official Worldsensing Solutions Partner');
      const scrollY = window.scrollY;
      return { hasMission, hasVision, hasZeroFailure, hasPartnership, scrollY };
    });

    console.log(`✓ Mission Statement Rendered: ${aboutVerification.hasMission ? 'PASS' : 'FAIL'}`);
    console.log(`✓ Vision Statement Rendered: ${aboutVerification.hasVision ? 'PASS' : 'FAIL'}`);
    console.log(`✓ Core Values (Zero-Failure Data Integrity): ${aboutVerification.hasZeroFailure ? 'PASS' : 'FAIL'}`);
    console.log(`✓ Scroll Y Reset on Tab Switch: ${aboutVerification.scrollY === 0 ? 'PASS (0px)' : `FAIL (${aboutVerification.scrollY}px)`}`);

    results.tests.push({ 
      name: 'About Us Mission & Vision Rendered', 
      pass: aboutVerification.hasMission && aboutVerification.hasVision && aboutVerification.hasZeroFailure 
    });
    results.tests.push({ 
      name: 'Tab Switch Top Scroll Reset', 
      pass: aboutVerification.scrollY === 0 
    });

    // Test 1.5: Tab Switching to "Equipment" & Category Filtering
    console.log('\n--- Testing "Equipment" Tab Navigation & In-Card Variant Switchers ---');
    await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('nav[aria-label="Desktop Navigation Tabs"] button'));
      const equipTab = tabs.find(t => t.textContent?.includes('Equipment'));
      equipTab?.click();
    });
    await new Promise(r => setTimeout(r, 400));

    // Test Category Filter: Railway Tracks
    await page.evaluate(() => {
      const filterButtons = Array.from(document.querySelectorAll('button'));
      const railwayBtn = filterButtons.find(b => b.textContent?.includes('Railway Tracks'));
      railwayBtn?.click();
    });
    await new Promise(r => setTimeout(r, 200));

    const railwayCardsCount = await page.evaluate(() => {
      const cards = document.querySelectorAll('[data-product-card="true"]');
      return cards.length;
    });
    console.log(`✓ Filter 'Railway Tracks' Cards: ${railwayCardsCount} (Expected 2: GNSS & Tiltmeter)`);
    results.tests.push({ name: 'Filter Railway Cards Count', pass: railwayCardsCount === 2 });

    // Reset to All Equipment
    await page.evaluate(() => {
      const filterButtons = Array.from(document.querySelectorAll('button'));
      const allBtn = filterButtons.find(b => b.textContent?.includes('All Equipment'));
      allBtn?.click();
    });
    await new Promise(r => setTimeout(r, 200));

    // Test 1.6: Technical Datasheet Modal Interaction
    console.log('\n--- Testing Equipment Technical Datasheet Modal ---');
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const datasheetBtn = buttons.find(b => b.textContent?.includes('Datasheet'));
      datasheetBtn?.click();
    });
    await new Promise(r => setTimeout(r, 300));

    const modalTitle = await page.evaluate(() => {
      const modal = document.querySelector('[role="dialog"]');
      return modal ? modal.querySelector('h3')?.textContent : null;
    });
    console.log(`✓ Technical Datasheet Modal Opened for: "${modalTitle}"`);
    results.tests.push({ name: 'Equipment Modal Opens', pass: modalTitle !== null });

    // Dismiss with ESC key
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 300));

    const modalClosed = await page.evaluate(() => {
      return document.querySelector('[role="dialog"]') === null;
    });
    console.log(`✓ Modal Dismissed via ESC Key: ${modalClosed ? 'PASS' : 'FAIL'}`);
    results.tests.push({ name: 'Modal ESC Key Dismiss', pass: modalClosed });

    // Test 1.7: Tab Switching to "Solutions" & System Architecture
    console.log('\n--- Testing "Solutions" Tab Navigation & Dual-Mode Topology ---');
    await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('nav[aria-label="Desktop Navigation Tabs"] button'));
      const solTab = tabs.find(t => t.textContent?.includes('Solutions'));
      solTab?.click();
    });
    await new Promise(r => setTimeout(r, 400));

    const solutionsContent = await page.evaluate(() => {
      const bodyText = document.body.innerText;
      const hasLandslide = bodyText.includes('Landslide') || bodyText.includes('Highlands');
      const hasRail = bodyText.includes('Railway');
      const hasDam = bodyText.includes('Dam');
      const hasArchitecture = bodyText.includes('How The Equipment Works Together');
      return hasLandslide && hasRail && hasDam && hasArchitecture;
    });
    console.log(`✓ Solutions & System Architecture Rendered: ${solutionsContent ? 'PASS' : 'FAIL'}`);
    results.tests.push({ name: 'Solutions & Architecture Rendered', pass: solutionsContent });

    // Test 1.8: Tab Switching to "Estimator" & One-Click Hand-off to Contact
    console.log('\n--- Testing "Estimator" Wizard & Transfer to Contact Tab ---');
    await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('nav[aria-label="Desktop Navigation Tabs"] button'));
      const estTab = tabs.find(t => t.textContent?.includes('Estimator'));
      estTab?.click();
    });
    await new Promise(r => setTimeout(r, 400));

    // Select Railway asset and transfer
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const railwayAssetBtn = buttons.find(b => b.textContent?.includes('Railway Track'));
      railwayAssetBtn?.click();
    });
    await new Promise(r => setTimeout(r, 200));

    // Click "Transfer to Enquiry Form"
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const transferBtn = buttons.find(b => b.textContent?.includes('Transfer to Enquiry Form'));
      transferBtn?.click();
    });
    await new Promise(r => setTimeout(r, 400));

    // Check we are now on Contact tab and message is pre-filled
    const contactVerification = await page.evaluate(() => {
      const messageInput = document.querySelector('#message');
      const msgVal = messageInput ? messageInput.value : '';
      const hasPreFill = msgVal.includes('Estimated Package for RAILWAY');
      const scrollY = window.scrollY;
      return { hasPreFill, msgVal, scrollY };
    });
    console.log(`✓ Estimator Package Hand-off to Contact Form: ${contactVerification.hasPreFill ? 'PASS' : 'FAIL'}`);
    console.log(`✓ Scroll Y Reset on Cross-Tab Transfer: ${contactVerification.scrollY === 0 ? 'PASS (0px)' : `FAIL (${contactVerification.scrollY}px)`}`);
    results.tests.push({ name: 'Estimator Cross-Tab Hand-off', pass: contactVerification.hasPreFill });

    // Test 1.9: Form Submission & Success State on Contact Tab
    console.log('\n--- Testing Contact Form Submission & WhatsApp URL Generation ---');
    await page.type('#name', 'Eng. Ruwan Jayawardena');
    await page.type('#organization', 'Sri Lanka Railways Geotechnical Dept');
    await page.type('#phone', '077 123 4567');
    await page.type('#email', 'ruwan.j@railway.gov.lk');

    await page.evaluate(() => {
      const submitBtn = document.querySelector('button[type="submit"]');
      submitBtn?.click();
    });
    await new Promise(r => setTimeout(r, 1200));

    const submissionSuccess = await page.evaluate(() => {
      const refElement = document.querySelector('.animate-tabEntrance span[class*="text-emerald-700"]');
      const refText = refElement?.textContent || '';
      const waLinks = Array.from(document.querySelectorAll('a'));
      const waBtn = waLinks.find(a => a.textContent?.includes('Send Summary via WhatsApp'));
      const waHref = waBtn ? waBtn.getAttribute('href') : '';
      return {
        hasRef: refText.includes('WGI-SRI-'),
        refText,
        hasWaLink: waHref.includes('wa.me/94771234567') && decodeURIComponent(waHref).includes('Ruwan'),
      };
    });

    console.log(`✓ Form Submission Success State: ${submissionSuccess.hasRef ? 'PASS' : 'FAIL'} ("${submissionSuccess.refText}")`);
    console.log(`✓ WhatsApp Summary Link Generated: ${submissionSuccess.hasWaLink ? 'PASS' : 'FAIL'}`);
    results.tests.push({ name: 'Form Submission Success State', pass: submissionSuccess.hasRef });
    results.tests.push({ name: 'WhatsApp Link Generation', pass: submissionSuccess.hasWaLink });

    // Take Desktop Screenshot
    await takeScreenshot(page, 'desktop-1440.png');
    console.log('📸 Desktop Full-Page Screenshot saved to test-screenshots/desktop-1440.png');

    // -------------------------------------------------------------
    // 2. TABLET TESTS (768 x 1024)
    // -------------------------------------------------------------
    console.log('\n--- 2. TABLET VIEWPORT TESTS (768x1024) ---');
    await page.setViewport({ width: 768, height: 1024 });
    await page.goto(URL, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 300));

    const tabletOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log(`✓ Tablet Horizontal Overflow: ${tabletOverflow ? 'FAIL (Overflow)' : 'PASS (No Overflow)'}`);
    results.tests.push({ name: 'Tablet Zero Horizontal Overflow', pass: !tabletOverflow });

    await takeScreenshot(page, 'tablet-768.png');
    console.log('📸 Tablet Full-Page Screenshot saved to test-screenshots/tablet-768.png');

    // -------------------------------------------------------------
    // 3. MOBILE TESTS (375 x 812)
    // -------------------------------------------------------------
    console.log('\n--- 3. MOBILE VIEWPORT TESTS (375x812) ---');
    await page.setViewport({ width: 375, height: 812 });
    await page.goto(URL, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 300));

    const mobileOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log(`✓ Mobile Horizontal Overflow: ${mobileOverflow ? 'FAIL (Overflow)' : 'PASS (No Overflow)'}`);
    results.tests.push({ name: 'Mobile Zero Horizontal Overflow', pass: !mobileOverflow });

    // Test Mobile Menu & Drawer
    const hamburgerBtn = await page.$('button[aria-label="Open menu"], button[aria-label="Close menu"]');
    console.log(`✓ Mobile Hamburger Button Present: ${hamburgerBtn ? 'PASS' : 'FAIL'}`);
    results.tests.push({ name: 'Mobile Hamburger Button Present', pass: !!hamburgerBtn });

    // Open Mobile Drawer
    await hamburgerBtn?.click();
    await new Promise(r => setTimeout(r, 300));

    const drawerButtonsCount = await page.evaluate(() => {
      const drawer = document.querySelector('#mobile-nav-drawer');
      if (!drawer) return 0;
      const btns = drawer.querySelectorAll('button');
      return btns.length;
    });
    console.log(`✓ Mobile Drawer Menu Tabs Count: ${drawerButtonsCount} (Expected 7)`);
    results.tests.push({ name: 'Mobile Drawer Menu Opens', pass: drawerButtonsCount === 7 });

    // Click 'About Us' tab inside mobile drawer
    await page.evaluate(() => {
      const drawer = document.querySelector('#mobile-nav-drawer');
      const btns = Array.from(drawer?.querySelectorAll('button') || []);
      const aboutBtn = btns.find(b => b.textContent?.includes('About Us'));
      aboutBtn?.click();
    });
    await new Promise(r => setTimeout(r, 400));

    const mobileDrawerClosedAndNavigated = await page.evaluate(() => {
      const drawer = document.querySelector('#mobile-nav-drawer');
      const bodyText = document.body.innerText;
      const hasMission = bodyText.includes('Our Corporate Mission');
      return drawer === null && hasMission;
    });
    console.log(`✓ Mobile Drawer Closes and Navigates to About Us: ${mobileDrawerClosedAndNavigated ? 'PASS' : 'FAIL'}`);
    results.tests.push({ name: 'Mobile Drawer Closes On Link Navigation', pass: mobileDrawerClosedAndNavigated });

    // Check Standalone Touch Targets
    const smallTargets = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button, a'));
      const small = buttons.filter(el => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return false;
        // Check if visible and clickable
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        return isVisible && rect.height < 34;
      });
      return small.length;
    });
    console.log(`✓ Mobile Standalone Action Button Touch Target Check (< 34px): ${smallTargets} (Expected 0)`);
    results.tests.push({ name: 'Mobile Touch Targets Sufficient', pass: smallTargets === 0 });

    await takeScreenshot(page, 'mobile-375.png');
    console.log('📸 Mobile Full-Page Screenshot saved to test-screenshots/mobile-375.png');

  } catch (err) {
    console.error('❌ Test Execution Error:', err);
    results.tests.push({ name: 'Execution Crash', pass: false, error: String(err) });
  } finally {
    await browser.close();
  }

  // Summary
  console.log('\n======================================================');
  console.log('             AUTOMATED TEST SUMMARY REPORT            ');
  console.log('======================================================');
  const total = results.tests.length;
  const passed = results.tests.filter(t => t.pass).length;
  const failed = total - passed;
  console.log(`Total Test Cases Executed: ${total}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Browser Console Errors: ${results.consoleErrors.length}`);
  console.log(`Network Failures: ${results.failedRequests.length}`);

  // Write JSON
  fs.writeFileSync(
    path.join(SCREENSHOTS_DIR, 'test-results.json'),
    JSON.stringify(results, null, 2)
  );
  console.log('\nDetailed test results JSON written to test-screenshots/test-results.json');
}

runTests();
