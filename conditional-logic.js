console.log("Conditional Logic JS – dropdown value support – v2025-02-01o-3");

const CONDITIONAL_PREFIXES = [
  "conditional-display",
  "conditional-trigger",
  "conditional-group",
  "conditional-disable-group",
  "conditional-hide-trigger",
  "conditional-hide-display",
];

const COLOR_PALETTE = [
  "#FF6633",
  "#7FE5F0",
  "#00B8AE",
  "#9A8899",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
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

function safeAddClass(element, className) {
  if (!className) return;

  const clean = className.trim();

  if (clean === "") return;

  // Defensive: never allow whitespace in class names
  if (/\s/.test(clean)) {
    console.warn("Blocked invalid class:", JSON.stringify(className));
    return;
  }

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

  // No value constraints = boolean trigger
  if (displayValues.length === 0) return true;

  const column =
    trigger.closest(".container-form-element__column") ||
    trigger.closest(".column");

  if (!column) return false;

  /* ---------- DROPDOWN ---------- */
const select = column.querySelector("select");
if (select && select.value && select.selectedIndex !== 0) {
  const option = select.options[select.selectedIndex];

  const valueNorm = normalizeForCSS(option.value || "");
  const textNorm = normalizeForCSS(option.textContent || "");

  return (
    displayValues.includes(valueNorm) ||
    displayValues.includes(textNorm)
  );
}

  /* ---------- RADIO (SINGLE SELECT) ---------- */
  const checkedRadio = column.querySelector("input[type='radio']:checked");
  if (checkedRadio) {
    const label = checkedRadio.closest(".radio-option")?.querySelector("label");
    if (!label) return false;

    const normalized = normalizeForCSS(label.textContent || "");
    return displayValues.includes(normalized);
  }

  return false;
}

function isTriggerSelected(element) {
  const column =
    element.closest(".container-form-element__column") ||
    element.closest(".column");

  if (!column) return false;

  /* ---------- DROPDOWN ---------- */
  const selects = column.querySelectorAll("select");
  const hasSelectValue = Array.from(selects).some(
    (select) => select.value && select.selectedIndex !== 0
  );

  /* ---------- RADIO (SINGLE SELECT) ---------- */
  const hasCheckedRadio =
    column.querySelector("input[type='radio']:checked") !== null;

  /* ---------- CHECKBOX / PACKAGE ---------- */
  const hasCheckedCheckbox =
    element.querySelector("input[type='checkbox']:checked") !== null;

  const hasSelectedPackage =
    element.querySelector(".packageSelected") !== null;

  return (
    hasSelectValue ||
    hasCheckedRadio ||
    hasCheckedCheckbox ||
    hasSelectedPackage
  );
}


function assignConditionalLogic(prefix) {
  if (hasEditContext()) {
    const identifierClass = `${prefix}-identify`;
    const targetClass = `${prefix}-id`;
    const nodes = document.getElementsByClassName(identifierClass);

    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      const classTokens = node.classList   .toString()   .split(" ")   .map((c) => c.trim())   .filter((c) => c !== "") .map((c) => c.trim()) .filter((c) => c !== "");

      for (let j = 0; j < classTokens.length; j += 1) {
        const classToken = classTokens[j];
        if (classToken.includes("cl-") || classToken.includes("clhide-")) {
          node.parentNode.style.minHeight = "0";
          const column = node.closest(".column");
          safeAddClass(column, classToken);
          column.classList.add(targetClass);
          column.classList.add("conditional-id");
        }
      }
    }
  }

  if (hasFormViewer()) {
    const identifierClass = `${prefix}-identify`;
    const targetClass = `${prefix}-id`;
    const nodes = document.getElementsByClassName(identifierClass);

    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      const classTokens = node.classList   .toString()   .split(" ")   .map((c) => c.trim())   .filter((c) => c !== "") .map((c) => c.trim()) .filter((c) => c !== "");

      for (let j = 0; j < classTokens.length; j += 1) {
        const classToken = classTokens[j];
        if (classToken.includes("cl-") || classToken.includes("clhide-")) {
          node.parentNode.style.minHeight = "0";
          const column = node.closest(".container-form-element__column");
          safeAddClass(column, classToken);
          column.classList.add(targetClass);
          column.classList.add("conditional-id");
        }
      }
    }
  }
}

function assignConditionalClasses() {
  CONDITIONAL_PREFIXES.forEach((prefix) => assignConditionalLogic(prefix));
}

function removeConditionalLogicDisplay() {
  if (document.querySelector("#edit-form") === null) {
    return;
  }

  const displayNodes = document.querySelectorAll(".conditional-display-id");
  displayNodes.forEach((displayNode) => {
    displayNode.classList.remove("conditional-display-id");
    const classTokens = displayNode.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");

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
    const classTokens = triggerNode.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");

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
    const classTokens = groupNode.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");

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

function assignConditionalLogicTriggerDisable() {
  if (hasEditContext()) {
    const disableGroups = document.getElementsByClassName("disable-group");
    for (let i = 0; i < disableGroups.length; i += 1) {
      const group = disableGroups[i];
      const classTokens = group.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");

      for (let j = 0; j < classTokens.length; j += 1) {
        const classToken = classTokens[j];
        if (classToken.includes("group-cl-") || classToken.includes("cl-")) {
          group.parentNode.style.minHeight = "0";
          const column = group.closest(".column");
          safeAddClass(column, classToken);
          column.classList.add("conditional-group-disable-id");
        }
      }
    }
  }

  if (hasFormViewer()) {
    const disableGroups = document.getElementsByClassName("disable-group");
    for (let i = 0; i < disableGroups.length; i += 1) {
      const group = disableGroups[i];
      const classTokens = group.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");

      for (let j = 0; j < classTokens.length; j += 1) {
        const classToken = classTokens[j];
        if (classToken.includes("group-cl-") || classToken.includes("cl-")) {
          group.parentNode.style.minHeight = "0";
          const column = group.closest(".container-form-element__column");
          safeAddClass(column, classToken);
          column.classList.add("conditional-group-disable-id");
        }
      }
    }
  }
}

function conditionalLogic() {
  const displayNodes = document.getElementsByClassName("conditional-display-id");

  for (let i = 0; i < displayNodes.length; i += 1) {
    let shouldShow = false;
    const displayNode = displayNodes[i];
    const displayParent = displayNode.parentNode;

    const classTokens = displayNode.classList
      .toString()
      .split(" ")
      .map((c) => c.trim())
      .filter((c) => c !== "");

    for (let j = 0; j < classTokens.length; j += 1) {
      const classToken = classTokens[j];

      if (classToken.includes("cl-")) {
        const triggers = document.getElementsByClassName("conditional-trigger-id");

        for (let k = 0; k < triggers.length; k += 1) {
          const trigger = triggers[k];

          if (trigger.classList.contains(classToken)) {
            const selected =
              isTriggerSelected(trigger) &&
              displayValueMatchesTrigger(displayNode, trigger);

            shouldShow = shouldShow || selected;
          }
        }
      }
    }

    // ✅ APPLY ONCE
    if (shouldShow) {
      displayNode.classList.add("show-content");
      displayParent.classList.remove("remove-padding");
    } else {
      displayNode.classList.remove("show-content");
      displayParent.classList.add("remove-padding");
    }
  }
}


function conditionalLogicRemoveItem() {
  const displayNodes = document.getElementsByClassName(
    "conditional-hide-display-id",
  );
  for (let i = 0; i < displayNodes.length; i += 1) {
    let shouldHide = false;
    const displayNode = displayNodes[i];
    const classTokens = displayNode.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");

    for (let j = 0; j < classTokens.length; j += 1) {
      const classToken = classTokens[j];
      if (classToken.includes("clhide-")) {
        const triggers = document.getElementsByClassName(
          "conditional-hide-trigger-id",
        );
        for (let k = 0; k < triggers.length; k += 1) {
          const trigger = triggers[k];
          if (trigger.classList.contains(classToken)) {
            const selected = isTriggerSelected(trigger);
            shouldHide = shouldHide || selected;
            if (shouldHide) {
              displayNode.classList.add("hide-content");
            } else {
              displayNode.classList.remove("hide-content");
            }
          }
        }
      }
    }
  }
}

function conditionalLogicRemoveWorkflows() {
  const displayNodes = document.getElementsByClassName("conditional-display-id");
  for (let i = 0; i < displayNodes.length; i += 1) {
    const displayNode = displayNodes[i];
    const classTokens = displayNode.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");

    for (let j = 0; j < classTokens.length; j += 1) {
      const classToken = classTokens[j];
      if (classToken.includes("cl-")) {
        const triggers = document.getElementsByClassName("conditional-trigger-id");
        for (let k = 0; k < triggers.length; k += 1) {
          const trigger = triggers[k];
          if (trigger.classList.contains(classToken)) {
          const shouldReset =
            !isTriggerSelected(trigger);

            if (shouldReset) {
              const selects = displayNode.querySelectorAll("select");
              for (let index = 0; index < selects.length; index += 1) {
                selects[index].value = "";
                selects[index].selectedIndex = 0;
              }
            }
          }
        }
      }
    }
  }
}

function conditionalLogicDisableFunction() {
  if (hasEditContext()) {
    const groups = document.getElementsByClassName("conditional-group-disable-id");
    for (let i = 0; i < groups.length; i += 1) {
      const groupNode = groups[i];
      const classTokens = groupNode.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");

      for (let j = 0; j < classTokens.length; j += 1) {
        const classToken = classTokens[j];
        if (classToken.includes("group-cl-")) {
          const selector = `.${classToken}`;
          const members = document.querySelectorAll(selector);
          let anySelected = false;

          members.forEach((member) => {
            anySelected = anySelected || isTriggerSelected(member);
          });

          members.forEach((member) => {
            if (anySelected) {
              const packages = member.getElementsByClassName("packageNotSelected");
              for (let index = 0; index < packages.length; index += 1) {
                packages[index].classList.add("disable-package");
              }

              const emptyChecks = member.querySelectorAll(
                ".clip-check .ng-empty",
              );
              for (let index = 0; index < emptyChecks.length; index += 1) {
                emptyChecks[index].parentElement.classList.add("disable-package");
              }
            } else {
              const packages = member.getElementsByClassName("packageNotSelected");
              for (let index = 0; index < packages.length; index += 1) {
                packages[index].classList.remove("disable-package");
              }

              const emptyChecks = member.querySelectorAll(".clip-check .ng-empty");
              for (let index = 0; index < emptyChecks.length; index += 1) {
                emptyChecks[index].parentElement.classList.remove("disable-package");
              }
            }
          });
        }
      }
    }
  }

  if (hasFormViewer()) {
    const groups = document.getElementsByClassName("conditional-group-disable-id");
    for (let i = 0; i < groups.length; i += 1) {
      const groupNode = groups[i];
      const classTokens = groupNode.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");

      for (let j = 0; j < classTokens.length; j += 1) {
        const classToken = classTokens[j];
        if (classToken.includes("group-cl-")) {
          const selector = `.${classToken}`;
          const members = document.querySelectorAll(selector);
          let anySelected = false;

          members.forEach((member) => {
            anySelected = anySelected || isTriggerSelected(member);
          });

          members.forEach((member) => {
            if (anySelected) {
              const packages = member.getElementsByClassName("packageNotSelected");
              for (let index = 0; index < packages.length; index += 1) {
                packages[index].classList.add("disable-package");
              }

              const emptyChecks = member.querySelectorAll(".checkboxNotChecked");
              for (let index = 0; index < emptyChecks.length; index += 1) {
                emptyChecks[index].classList.add("disable-package");
              }

              const checked = member.querySelectorAll(".checkboxChecked");
              for (let index = 0; index < checked.length; index += 1) {
                checked[index].classList.remove("disable-package");
              }
            } else {
              const packages = member.getElementsByClassName("packageNotSelected");
              for (let index = 0; index < packages.length; index += 1) {
                packages[index].classList.remove("disable-package");
              }

              const emptyChecks = member.querySelectorAll(".checkboxNotChecked");
              for (let index = 0; index < emptyChecks.length; index += 1) {
                emptyChecks[index].classList.remove("disable-package");
              }
            }
          });
        }
      }
    }
  }
}

function addCheckboxID() {
  if (!hasFormViewer()) {
    return;
  }

  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    const wrapper = checkbox.closest(".checkbox-option");
    wrapper.classList.remove("checkboxChecked");
    wrapper.classList.add("checkboxNotChecked");
  });

  const checkedCheckboxes = document.querySelectorAll(
    "input[type='checkbox']:checked",
  );
  checkedCheckboxes.forEach((checkbox) => {
    const wrapper = checkbox.closest(".checkbox-option");
    wrapper.classList.add("checkboxChecked");
    wrapper.classList.remove("checkboxNotChecked");
  });
}

function addConditionalGuides() {
  const toggle = document.getElementById("toggle-conditional-guidelines");
  if (!toggle) {
    return;
  }

  if (toggle.checked === true) {
    let conditionalClasses = "";
    const conditionalNodes = document.getElementsByClassName("conditional-id");
    for (let i = 0; i < conditionalNodes.length; i += 1) {
      const conditionalNode = conditionalNodes[i];
      const classTokens = conditionalNode.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");
      for (let j = 0; j < classTokens.length; j += 1) {
        const classToken = classTokens[j];
        if (classToken.includes("cl-") && !classToken.includes("group")) {
          conditionalClasses = `${conditionalClasses} ${classToken}`;
          const triggers = document.getElementsByClassName("conditional-trigger-id");
          for (let k = 0; k < triggers.length; k += 1) {
            let triggerClasses = "";
            const trigger = triggers[k];
            const triggerTokens = trigger.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");

            for (let m = 0; m < triggerTokens.length; m += 1) {
              const triggerToken = triggerTokens[m];
              if (triggerToken.includes("cl-")) {
                triggerClasses = `${triggerClasses} ${triggerToken}`;
                if (trigger.classList.contains(classToken)) {
                  if (
                    trigger.querySelector(".conditional-guides") === null &&
                    triggerClasses !== ""
                  ) {
                    const guide = document.createElement("div");
                    guide.classList.add("conditional-guides");
                    guide.style.backgroundColor = COLOR_PALETTE[i];
                    guide.style.color = "white";
                    guide.style.padding = "10px 20px";
                    guide.style.display = "block";
                    guide.style.textTransform = "uppercase";
                    guide.style.letterSpacing = "1px";
                    guide.style.fontSize = "10px";
                    trigger.style.border = "1px solid";
                    trigger.style.borderColor = COLOR_PALETTE[i];
                    guide.innerHTML = `Conditional Trigger:${triggerClasses}`;
                    trigger.insertBefore(guide, trigger.firstChild);
                  }

                  if (
                    triggerClasses !== "" &&
                    trigger.querySelector(".conditional-guides") !== null
                  ) {
                    const existingGuide = trigger.querySelector(
                      "div.conditional-guides",
                    );
                    existingGuide.innerHTML = `Conditional Trigger:${triggerClasses}`;
                    existingGuide.style.backgroundColor = COLOR_PALETTE[i];
                    trigger.style.borderColor = COLOR_PALETTE[i];
                  }
                }
              }
            }
          }

          const displayNodes = document.getElementsByClassName(
            "conditional-display-id",
          );
          for (let k = 0; k < displayNodes.length; k += 1) {
            let displayClasses = "";
            const displayNode = displayNodes[k];
            const displayTokens = displayNode.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");

            for (let m = 0; m < displayTokens.length; m += 1) {
              const displayToken = displayTokens[m];
              if (displayToken.includes("cl-")) {
                displayClasses = `${displayClasses} ${displayToken}`;
                if (displayNode.classList.contains(classToken)) {
                  if (
                    displayNode.querySelector(".conditional-guides") === null &&
                    displayClasses !== ""
                  ) {
                    const guide = document.createElement("div");
                    guide.classList.add("conditional-guides");
                    guide.style.backgroundColor = COLOR_PALETTE[i];
                    guide.style.color = "white";
                    guide.style.padding = "10px 20px";
                    guide.style.display = "block";
                    guide.style.textTransform = "uppercase";
                    guide.style.letterSpacing = "1px";
                    guide.style.fontSize = "10px";
                    displayNode.style.border = "1px solid";
                    displayNode.style.borderColor = COLOR_PALETTE[i];
                    guide.innerHTML = `Conditional Display:${displayClasses}`;
                    displayNode.insertBefore(guide, displayNode.firstChild);
                  }

                  if (
                    displayClasses !== "" &&
                    displayNode.querySelector(".conditional-guides") !== null
                  ) {
                    const existingGuide = displayNode.querySelector(
                      "div.conditional-guides",
                    );
                    existingGuide.innerHTML = `Conditional Display:${displayClasses}`;
                    existingGuide.style.backgroundColor = COLOR_PALETTE[i];
                    displayNode.style.borderColor = COLOR_PALETTE[i];
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if (toggle.checked === false) {
    const guides = document.querySelectorAll("div.conditional-guides");
    guides.forEach((guide) => {
      guide.parentNode.style.border = "0px solid";
      guide.parentNode.removeChild(guide);
    });
  }
}

function removeConditionalGuidelines() {
  const guides = document.querySelectorAll("div.conditional-guides");
  guides.forEach((guide) => {
    const parent = guide.parentNode;
    const isConditional = parent.classList.contains("conditional-id");
    if (!isConditional) {
      const parentGuides = parent.querySelectorAll("div.conditional-guides");
      parentGuides.forEach((parentGuide) => {
        parentGuide.parentNode.style.border = "0px solid";
        parentGuide.parentNode.removeChild(parentGuide);
      });
    }
  });
}

function conditionalRequired() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.hasAttribute("required")) {
      input.classList.add("required-catch");
    }
  });

  const displayNodes = document.getElementsByClassName("conditional-display-id");
  for (let i = 0; i < displayNodes.length; i += 1) {
    let shouldEnable = false;
    const displayNode = displayNodes[i];
    const classTokens = displayNode.classList.toString().split(" ") .map((c) => c.trim()) .filter((c) => c !== "");

    for (let j = 0; j < classTokens.length; j += 1) {
      const classToken = classTokens[j];
      if (classToken.includes("cl-")) {
        const triggers = document.getElementsByClassName("conditional-trigger-id");
        for (let k = 0; k < triggers.length; k += 1) {
          const trigger = triggers[k];
          if (trigger.classList.contains(classToken)) {
            const selected = isTriggerSelected(trigger);
            shouldEnable = shouldEnable || selected;

            if (shouldEnable) {
              const requiredFields =
                displayNode.querySelectorAll(".required-catch");
              requiredFields.forEach((field) => {
                field.removeAttribute("required");
                field.setAttribute("ng-required", "false");
              });
            } else {
              const requiredFields =
                displayNode.querySelectorAll(".required-catch");
              requiredFields.forEach((field) => {
                field.setAttribute("required", "required");
              });
            }
          }
        }
      }
    }
  }
}

function identifyMainCodes() {
  if (hasEditContext()) {
    if (document.querySelectorAll("div.hide-on-front")) {
      const hiddenNodes = document.querySelectorAll("div.hide-on-front");
      hiddenNodes.forEach((node) => {
        const row = node.closest(".row");
        row.classList.add("main-codes-id");
        if (document.querySelector("#edit-form") !== null) {
          row.setAttribute(
            "style",
            "margin-top:0px!important;margin-bottom:0px!important; border:0px",
          );
        }
      });
    }
  }

  if (hasFormViewer()) {
    if (document.querySelectorAll(".hide-on-front")) {
      const hiddenNodes = document.querySelectorAll("div.hide-on-front");
      hiddenNodes.forEach((node) => {
        const content = node.closest(".form-element__content");
        content.classList.add("hide-on-front-id");
        content.setAttribute(
          "style",
          "margin-top:0px!important;margin-bottom:0px!important;padding:0px!important;height:0px;overflow:hidden;",
        );
      });
    }

    if (document.querySelectorAll(".hide-on-front")) {
      const hiddenNodes = document.querySelectorAll("b.hide-on-front");
      hiddenNodes.forEach((node) => {
        const content = node.closest(".form-element__content");
        content.classList.add("hide-on-front-id");
        content.setAttribute(
          "style",
          "margin-top:0px!important;margin-bottom:0px!important;padding:0px!important;height:0px;overflow:hidden;",
        );
      });
    }
  }
}

function conditionalCheck() {
  document.addEventListener(
    "click",
    () => {
      conditionalLogicDisableFunction();
      conditionalLogic();
      conditionalLogicRemoveItem();
      addCheckboxID();
    },
    false,
  );
}

function conditionalCheckSelects() {
  document.addEventListener(
    "change",
    (event) => {
      if (event.target && event.target.tagName === "SELECT") {
        conditionalLogicDisableFunction();
        conditionalLogic();
        conditionalLogicRemoveItem();
        addCheckboxID();
      }
    },
    false,
  );
}

function conditionalCheckMouse() {
  const triggers = document.getElementsByClassName("conditional-trigger-id");
  for (let i = 0; i < triggers.length; i += 1) {
    triggers[i].addEventListener(
      "mousemove",
      () => {
        conditionalLogicDisableFunction();
        conditionalLogic();
        conditionalLogicRemoveItem();
        addCheckboxID();
      },
      false,
    );
  }
}

function whileEdit() {
  if (document.querySelector("#edit-form") !== null) {
    setInterval(() => {
      addConditionalGuides();
      removeConditionalGuidelines();
      removeConditionalLogicDisplay();
      removeConditionalLogicTrigger();
      removeConditionalGroup();
      assignConditionalClasses();
      assignConditionalLogicTriggerDisable();
      identifyMainCodes();
    }, 250);
  }
}

function startJavascript() {
  assignConditionalClasses();
  assignConditionalLogicTriggerDisable();
  conditionalLogicDisableFunction();
  conditionalLogicRemoveItem();
  whileEdit();
  identifyMainCodes();
  conditionalLogic();
  conditionalCheck();
  conditionalCheckMouse();
  conditionalCheckSelects(); 
}

startJavascript();
