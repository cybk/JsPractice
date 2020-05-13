const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function tabClick(e) {
    // Hide all the tabs
    tabPanels.forEach(p => {
        p.hidden = true;
    });

    // mark all tabs are unselected
    tabButtons.forEach(t => {
        t.setAttribute('aria-selected', false);
    });

    // Mark the clicked button as selected
    e.currentTarget.setAttribute('aria-selected', true);

    // find the related tab and show the content
    const { id } = e.currentTarget;
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false;
}

tabButtons.forEach(b => b.addEventListener('click', tabClick));
