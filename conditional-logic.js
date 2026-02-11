(function initConditionalLogicScript() {
  if (window.__conditionalLogicScriptLoaded) {
    return;
  }
  window.__conditionalLogicScriptLoaded = true;

console.warn("2.4 CONDITIONAL SCRIPT LOADED");

const CONDITIONAL_PREFIXES = [
  "conditional-display",
  "conditional-trigger",
  "conditional-group",
  "conditional-disable-group",
  "conditional-hide-trigger",
  "conditional-hide-display",
];

const EDIT_CONTEXT_SELECTORS = [
  "view-form-public-component",
  "legacy-form-preview-component",
  "#edit-form",
  "#view-form",
];

const CLASS_KEEPERS = new Set([
  "row",
  "item",
  "packageNotSelected",
  "packageSelected",
  "selected",
  "ng-scope",
  "column",
]);

function getClassTokens(node) {
  return node.classList
    .toString()
    .split(" ")
    .map((c) => c.trim())
    .filter((c) => c !== "");
}

function isTriggerSelected(trigger) {
  if (!trigger) return false;

  // Package cards can act as triggers without native input elements.
  if (
    trigger.querySelector(".packageSelected") !== null ||
    trigger.querySelector(".selected.packageSelected") !== null
  ) {
    return true;
  }

  const checkedInput = trigger.querySelector(
    "input[type='checkbox']:checked, input[type='radio']:checked",
  );
  if (checkedInput) {
    return true;
  }

  const select = trigger.querySelector("select");
  if (select) {
    return select.value !== "";
  }

  return false;
}

function safeAddClass(element, className) {
  if (!element || !element.classList || !className) return;

  const clean = className.trim();
  if (clean === "" || /\s/.test(clean)) return;

  element.classList.add(clean);
}

function hasEditContext() {
  return EDIT_CONTEXT_SELECTORS.some(
    (selector) => document.querySelector(selector) !== null,
  );
}

function hasFormViewer() {
  return document.querySelector(".form-viewer") !== null;
}

function normalizeForCSS(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "");
}

function displayValueMatchesTrigger(displayNode, trigger) {
  const displayValues = Array.from(displayNode.classList)
    .filter((c) => c.startsWith("cl-value-"))
    .map((c) => c.replace("cl-value-", ""));

  if (displayValues.length === 0) return true;

  const column =
    trigger.closest(".container-form-element__column") ||
    trigger.closest(".column");

  if (!column) return false;

  const checkedRadio = column.querySelector("input[type='radio']:checked");
  if (checkedRadio) {
    const label = checkedRadio.closest(".radio-option")?.querySelector("label");
    if (!label) return false;

    const normalized = normalizeForCSS(label.textContent || "");
    return displayValues.includes(normalized);
  }

  const select = column.querySelector("select");
  if (
    select &&
    select.selectedIndex > -1 &&
    select.options[select.selectedIndex] &&
    !select.options[select.selectedIndex].disabled &&
    select.value !== ""
  ) {
    const selectedOption = select.options[select.selectedIndex];
    const visibleLabel = (selectedOption.textContent || "").trim();
    const normalized = normalizeForCSS(
      visibleLabel || selectedOption.value || "",
    );

    return displayValues.includes(normalized);
  }

  return false;
}


function hasSelectedPackageOrInput(node) {
  if (!node) return false;

  return (
    node.querySelector(".packageSelected") !== null ||
    node.querySelector("input[type='checkbox']:checked") !== null ||
    node.querySelector("input[type='radio']:checked") !== null
  );
}

function assignConditionalLogic(prefix) {
  const identifierClass = `${prefix}-identify`;
  const targetClass = `${prefix}-id`;
  const nodes = document.getElementsByClassName(identifierClass);

  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];
    const classTokens = getClassTokens(node);

    for (let j = 0; j < classTokens.length; j += 1) {
      const classToken = classTokens[j];
      if (!classToken.includes("cl-") && !classToken.includes("clhide-")) {
        continue;
      }

      const column = hasFormViewer()
        ? node.closest(".container-form-element__column")
        : node.closest(".column");

      if (!column) continue;

      // Prevent hidden helper marker blocks from reserving vertical space.
      if (node.parentNode && node.parentNode.style) {
        node.parentNode.style.minHeight = "0";
      }

      safeAddClass(column, classToken);
      column.classList.add(targetClass);
      column.classList.add("conditional-id");
    }
  }
}



function assignConditionalLogicTriggerDisable() {
  const disableGroups = document.getElementsByClassName("disable-group");

  for (let i = 0; i < disableGroups.length; i += 1) {
    const group = disableGroups[i];
    const classTokens = getClassTokens(group);

    for (let j = 0; j < classTokens.length; j += 1) {
      const classToken = classTokens[j];
      if (!classToken.includes("group-cl-") && !classToken.includes("cl-")) {
        continue;
      }

      const column = hasFormViewer()
        ? group.closest(".container-form-element__column")
        : group.closest(".column");

      if (!column) continue;

      if (group.parentNode && group.parentNode.style) {
        group.parentNode.style.minHeight = "0";
      }

      safeAddClass(column, classToken);
      column.classList.add("conditional-group-disable-id");
    }
  }
}

function collapseHelperRows() {
  const helperSelectors = [
    ".conditional-trigger-identify",
    ".conditional-display-identify",
    ".conditional-group-identify",
    ".conditional-disable-group-identify",
    ".conditional-hide-trigger-identify",
    ".conditional-hide-display-identify",
    ".disable-group",
    ".hide-on-front",
  ];

  helperSelectors.forEach((selector) => {
    const nodes = document.querySelectorAll(selector);

    nodes.forEach((node) => {
      const helperRow =
        node.closest(".form-viewer-element.form-element") ||
        node.closest(".form-element__content") ||
        node.parentElement;

      if (!helperRow || !helperRow.style) return;

      helperRow.style.marginTop = "0";
      helperRow.style.marginBottom = "0";
      helperRow.style.paddingTop = "0";
      helperRow.style.paddingBottom = "0";
      helperRow.style.minHeight = "0";
      helperRow.style.height = "0";
      helperRow.style.overflow = "hidden";
      helperRow.style.border = "0";
    });
  });
}

function assignConditionalClasses() {
  CONDITIONAL_PREFIXES.forEach((prefix) => assignConditionalLogic(prefix));
}

function addCheckboxID() {
  if (!hasFormViewer()) {
    return;
  }

  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    const wrapper = checkbox.closest(".checkbox-option");
    if (!wrapper) return;

    wrapper.classList.toggle("checkboxChecked", checkbox.checked);
    wrapper.classList.toggle("checkboxNotChecked", !checkbox.checked);
  });
}

function setCollapsedState(displayNode, isVisible) {
  const displayParent = displayNode.parentNode;
  if (!displayParent) return;

  if (isVisible) {
    displayNode.classList.add("show-content");
    displayParent.classList.remove("remove-padding");
  } else {
    displayNode.classList.remove("show-content");
    displayParent.classList.add("remove-padding");
  }
}

function conditionalLogic() {
  const displayNodes = document.getElementsByClassName("conditional-display-id");

  for (let i = 0; i < displayNodes.length; i += 1) {
    let shouldShow = false;
    const displayNode = displayNodes[i];
    const classTokens = getClassTokens(displayNode);

    for (let j = 0; j < classTokens.length; j += 1) {
      const classToken = classTokens[j];
      if (!classToken.includes("cl-")) continue;

      const triggers = document.getElementsByClassName("conditional-trigger-id");
      for (let k = 0; k < triggers.length; k += 1) {
        const trigger = triggers[k];
        if (!trigger.classList.contains(classToken)) continue;

        const selected =
          isTriggerSelected(trigger) &&
          displayValueMatchesTrigger(displayNode, trigger);

        shouldShow = shouldShow || selected;
      }
    }

    setCollapsedState(displayNode, shouldShow);
  }
}

function conditionalLogicDisableFunction() {
  // Keep checkbox wrapper classes in sync BEFORE disabling package UI.
  addCheckboxID();

  const groups = document.getElementsByClassName("conditional-group-disable-id");
  for (let i = 0; i < groups.length; i += 1) {
    const groupNode = groups[i];
    const classTokens = getClassTokens(groupNode);

    for (let j = 0; j < classTokens.length; j += 1) {
      const classToken = classTokens[j];
      if (!classToken.includes("group-cl-")) continue;

      const members = document.querySelectorAll(`.${classToken}`);
      let anySelected = false;

      members.forEach((member) => {
        anySelected = anySelected || hasSelectedPackageOrInput(member);
      });

      members.forEach((member) => {
        const packages = member.getElementsByClassName("packageNotSelected");
        for (let index = 0; index < packages.length; index += 1) {
          packages[index].classList.toggle("disable-package", anySelected);
        }

        const unchecked = hasFormViewer()
          ? member.querySelectorAll(".checkboxNotChecked")
          : member.querySelectorAll(".clip-check .ng-empty");

        for (let index = 0; index < unchecked.length; index += 1) {
          if (hasFormViewer()) {
            unchecked[index].classList.toggle("disable-package", anySelected);
          } else if (unchecked[index].parentElement) {
            unchecked[index].parentElement.classList.toggle(
              "disable-package",
              anySelected,
            );
          }
        }

        if (hasFormViewer()) {
          const checked = member.querySelectorAll(".checkboxChecked");
          for (let index = 0; index < checked.length; index += 1) {
            checked[index].classList.remove("disable-package");
          }
        }
      });
    }
  }
}

function runConditionalCycle() {
  conditionalLogicDisableFunction();
  conditionalLogic();
}

function runConditionalCycleDeferred() {
  runConditionalCycle();

  // Package selection classes in the form viewer can update after click handlers.
  // Re-run on micro + short delays so obfuscated builds don't keep stale disable state.
  setTimeout(runConditionalCycle, 0);
  setTimeout(runConditionalCycle, 120);
  setTimeout(runConditionalCycle, 300);
}

function attachConditionalListeners() {
  document.addEventListener("click", runConditionalCycleDeferred, false);
  document.addEventListener(
    "change",
    (event) => {
      if (
        event.target &&
        (event.target.matches("select") ||
          event.target.matches("input[type='checkbox']") ||
          event.target.matches("input[type='radio']"))
      ) {
        runConditionalCycleDeferred();
      }
    },
    false,
  );
}

function removeConditionalLogicDisplay() {
  if (document.querySelector("#edit-form") === null) {
    return;
  }

  const displayNodes = document.querySelectorAll(".conditional-display-id");
  displayNodes.forEach((displayNode) => {
    displayNode.classList.remove("conditional-display-id");
    const classTokens = getClassTokens(displayNode);

    classTokens.forEach((classToken) => {
      const keep =
        CLASS_KEEPERS.has(classToken) ||
        classToken.includes("col-") ||
        classToken.includes(" ");

      if (!keep) {
        displayNode.classList.remove(classToken);
      }
    });
  });
}

function removeConditionalLogicTrigger() {
  if (document.querySelector("#edit-form") === null) {
    return;
  }

  const triggerNodes = document.querySelectorAll(".conditional-trigger-id");
  triggerNodes.forEach((triggerNode) => {
    triggerNode.classList.remove("conditional-trigger-id");
    const classTokens = getClassTokens(triggerNode);

    classTokens.forEach((classToken) => {
      const keep =
        CLASS_KEEPERS.has(classToken) ||
        classToken.includes("col-") ||
        classToken.includes(" ");

      if (!keep) {
        triggerNode.classList.remove(classToken);
      }
    });
  });
}

function removeConditionalGroup() {
  if (document.querySelector("#edit-form") === null) {
    return;
  }

  const groupNodes = document.querySelectorAll(".conditional-group-id");
  groupNodes.forEach((groupNode) => {
    groupNode.classList.remove("conditional-group-id");
    const classTokens = getClassTokens(groupNode);

    classTokens.forEach((classToken) => {
      const keep =
        CLASS_KEEPERS.has(classToken) ||
        classToken.includes("col-") ||
        classToken.includes(" ");

      if (!keep) {
        groupNode.classList.remove(classToken);
      }
    });
  });
}



let packageStateObserver = null;

function observePackageStateChanges() {
  if (!document.body || packageStateObserver !== null) {
    return;
  }

  let debounceId = null;
  packageStateObserver = new MutationObserver((mutations) => {
    let shouldRun = false;

    for (let i = 0; i < mutations.length; i += 1) {
      const mutation = mutations[i];
      if (mutation.type !== "attributes" || mutation.attributeName !== "class") {
        continue;
      }

      const target = mutation.target;
      if (!(target instanceof Element)) continue;

      if (
        target.classList.contains("packageSelected") ||
        target.classList.contains("packageNotSelected") ||
        target.classList.contains("checkboxChecked") ||
        target.classList.contains("checkboxNotChecked")
      ) {
        shouldRun = true;
        break;
      }
    }

    if (!shouldRun) return;

    if (debounceId) {
      clearTimeout(debounceId);
    }

    debounceId = setTimeout(() => {
      runConditionalCycleDeferred();
    }, 50);
  });

  packageStateObserver.observe(document.body, {
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });
}

function attachConditionalMousemoveListeners() {
  const triggers = document.getElementsByClassName("conditional-trigger-id");

  for (let i = 0; i < triggers.length; i += 1) {
    triggers[i].addEventListener("mousemove", runConditionalCycle, false);
  }
}

function whileEdit() {
  if (document.querySelector("#edit-form") !== null) {
    setInterval(() => {
      removeConditionalLogicDisplay();
      removeConditionalLogicTrigger();
      removeConditionalGroup();
      assignConditionalClasses();
      assignConditionalLogicTriggerDisable();
      collapseHelperRows();
    }, 250);
  }
}

function startJavascript() {
  assignConditionalClasses();
  assignConditionalLogicTriggerDisable();
  collapseHelperRows();
  addCheckboxID();
  runConditionalCycle();
  whileEdit();
  attachConditionalListeners();
  attachConditionalMousemoveListeners();
  observePackageStateChanges();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startJavascript);
} else {
  startJavascript();
}

})();
