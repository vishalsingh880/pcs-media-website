(function () {

  const core = document.getElementById("mmCore");

  const nodes = [
    document.getElementById("node0"),
    document.getElementById("node1"),
    document.getElementById("node2")
  ];

  const lines = [
    document.getElementById("line0"),
    document.getElementById("line1"),
    document.getElementById("line2")
  ];

  let index = 0;


  function setActive(activeIndex) {

    nodes.forEach(function (node, i) {

      node.classList.toggle(
        "active",
        i === activeIndex
      );

    });


    lines.forEach(function (line, i) {

      line.classList.toggle(
        "active",
        i === activeIndex
      );

    });

  }


  /* First state */

  setActive(0);


  /* Click */

  if (core) {

    core.addEventListener("click", function () {

      index = (index + 1) % 3;

      setActive(index);

    });

  }

})();



/* =================================
   INDUSTRY TABS
================================= */

(function () {

  const tabs = document.querySelectorAll(".itab");

  const panels = document.querySelectorAll(".ipanel");


  tabs.forEach(function (tab) {

    tab.addEventListener("click", function () {


      /* Remove active from all tabs */

      tabs.forEach(function (item) {

        item.classList.remove("active");

      });


      /* Hide all panels */

      panels.forEach(function (panel) {

        panel.classList.remove("active");

      });


      /* Activate clicked tab */

      tab.classList.add("active");


      /* Find matching panel */

      const panelId = tab.dataset.panel;

      const targetPanel =
        document.getElementById(panelId);


      if (targetPanel) {

        targetPanel.classList.add("active");

      }

    });

  });

})();