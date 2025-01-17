<<<<<<< HEAD
var addSorting = (function () {
    "use strict";
=======
/* eslint-disable */
var addSorting = (function() {
    'use strict';
>>>>>>> dd469dee80ac4c180c47e0fe6cd95037301b4d93
    var cols,
        currentSort = {
            index: 0,
            desc: false
        };

    // returns the summary table element
<<<<<<< HEAD
    function getTable() { return document.querySelector('.coverage-summary'); }
    // returns the thead element of the summary table
    function getTableHeader() { return getTable().querySelector('thead tr'); }
    // returns the tbody element of the summary table
    function getTableBody() { return getTable().querySelector('tbody'); }
    // returns the th element for nth column
    function getNthColumn(n) { return getTableHeader().querySelectorAll('th')[n]; }
=======
    function getTable() {
        return document.querySelector('.coverage-summary');
    }
    // returns the thead element of the summary table
    function getTableHeader() {
        return getTable().querySelector('thead tr');
    }
    // returns the tbody element of the summary table
    function getTableBody() {
        return getTable().querySelector('tbody');
    }
    // returns the th element for nth column
    function getNthColumn(n) {
        return getTableHeader().querySelectorAll('th')[n];
    }

    function onFilterInput() {
        const searchValue = document.getElementById('fileSearch').value;
        const rows = document.getElementsByTagName('tbody')[0].children;
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (
                row.textContent
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
            ) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    }

    // loads the search box
    function addSearchBox() {
        var template = document.getElementById('filterTemplate');
        var templateClone = template.content.cloneNode(true);
        templateClone.getElementById('fileSearch').oninput = onFilterInput;
        template.parentElement.appendChild(templateClone);
    }
>>>>>>> dd469dee80ac4c180c47e0fe6cd95037301b4d93

    // loads all columns
    function loadColumns() {
        var colNodes = getTableHeader().querySelectorAll('th'),
            colNode,
            cols = [],
            col,
            i;

        for (i = 0; i < colNodes.length; i += 1) {
            colNode = colNodes[i];
            col = {
                key: colNode.getAttribute('data-col'),
                sortable: !colNode.getAttribute('data-nosort'),
                type: colNode.getAttribute('data-type') || 'string'
            };
            cols.push(col);
            if (col.sortable) {
                col.defaultDescSort = col.type === 'number';
<<<<<<< HEAD
                colNode.innerHTML = colNode.innerHTML + '<span class="sorter"></span>';
=======
                colNode.innerHTML =
                    colNode.innerHTML + '<span class="sorter"></span>';
>>>>>>> dd469dee80ac4c180c47e0fe6cd95037301b4d93
            }
        }
        return cols;
    }
    // attaches a data attribute to every tr element with an object
    // of data values keyed by column name
    function loadRowData(tableRow) {
        var tableCols = tableRow.querySelectorAll('td'),
            colNode,
            col,
            data = {},
            i,
            val;
        for (i = 0; i < tableCols.length; i += 1) {
            colNode = tableCols[i];
            col = cols[i];
            val = colNode.getAttribute('data-value');
            if (col.type === 'number') {
                val = Number(val);
            }
            data[col.key] = val;
        }
        return data;
    }
    // loads all row data
    function loadData() {
        var rows = getTableBody().querySelectorAll('tr'),
            i;

        for (i = 0; i < rows.length; i += 1) {
            rows[i].data = loadRowData(rows[i]);
        }
    }
    // sorts the table using the data for the ith column
    function sortByIndex(index, desc) {
        var key = cols[index].key,
<<<<<<< HEAD
            sorter = function (a, b) {
=======
            sorter = function(a, b) {
>>>>>>> dd469dee80ac4c180c47e0fe6cd95037301b4d93
                a = a.data[key];
                b = b.data[key];
                return a < b ? -1 : a > b ? 1 : 0;
            },
            finalSorter = sorter,
            tableBody = document.querySelector('.coverage-summary tbody'),
            rowNodes = tableBody.querySelectorAll('tr'),
            rows = [],
            i;

        if (desc) {
<<<<<<< HEAD
            finalSorter = function (a, b) {
=======
            finalSorter = function(a, b) {
>>>>>>> dd469dee80ac4c180c47e0fe6cd95037301b4d93
                return -1 * sorter(a, b);
            };
        }

        for (i = 0; i < rowNodes.length; i += 1) {
            rows.push(rowNodes[i]);
            tableBody.removeChild(rowNodes[i]);
        }

        rows.sort(finalSorter);

        for (i = 0; i < rows.length; i += 1) {
            tableBody.appendChild(rows[i]);
        }
    }
    // removes sort indicators for current column being sorted
    function removeSortIndicators() {
        var col = getNthColumn(currentSort.index),
            cls = col.className;

        cls = cls.replace(/ sorted$/, '').replace(/ sorted-desc$/, '');
        col.className = cls;
    }
    // adds sort indicators for current column being sorted
    function addSortIndicators() {
<<<<<<< HEAD
        getNthColumn(currentSort.index).className += currentSort.desc ? ' sorted-desc' : ' sorted';
=======
        getNthColumn(currentSort.index).className += currentSort.desc
            ? ' sorted-desc'
            : ' sorted';
>>>>>>> dd469dee80ac4c180c47e0fe6cd95037301b4d93
    }
    // adds event listeners for all sorter widgets
    function enableUI() {
        var i,
            el,
            ithSorter = function ithSorter(i) {
                var col = cols[i];

<<<<<<< HEAD
                return function () {
=======
                return function() {
>>>>>>> dd469dee80ac4c180c47e0fe6cd95037301b4d93
                    var desc = col.defaultDescSort;

                    if (currentSort.index === i) {
                        desc = !currentSort.desc;
                    }
                    sortByIndex(i, desc);
                    removeSortIndicators();
                    currentSort.index = i;
                    currentSort.desc = desc;
                    addSortIndicators();
                };
            };
<<<<<<< HEAD
        for (i =0 ; i < cols.length; i += 1) {
=======
        for (i = 0; i < cols.length; i += 1) {
>>>>>>> dd469dee80ac4c180c47e0fe6cd95037301b4d93
            if (cols[i].sortable) {
                // add the click event handler on the th so users
                // dont have to click on those tiny arrows
                el = getNthColumn(i).querySelector('.sorter').parentElement;
                if (el.addEventListener) {
                    el.addEventListener('click', ithSorter(i));
                } else {
                    el.attachEvent('onclick', ithSorter(i));
                }
            }
        }
    }
    // adds sorting functionality to the UI
<<<<<<< HEAD
    return function () {
=======
    return function() {
>>>>>>> dd469dee80ac4c180c47e0fe6cd95037301b4d93
        if (!getTable()) {
            return;
        }
        cols = loadColumns();
<<<<<<< HEAD
        loadData(cols);
=======
        loadData();
        addSearchBox();
>>>>>>> dd469dee80ac4c180c47e0fe6cd95037301b4d93
        addSortIndicators();
        enableUI();
    };
})();

window.addEventListener('load', addSorting);
