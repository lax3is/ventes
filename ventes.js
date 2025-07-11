// ==UserScript==
// @name         ventes
// @namespace    http://tampermonkey.net/
// @version      2.3
// @description  Met en rouge toutes les lignes annulées (tr.text-muted) sur Odoo Contacts/Devis
// @author       alexis sair
// @match        https://winprovence.odoo.com/web*
// @updateURL    https://raw.githubusercontent.com/lax3is/ventes/refs/heads/main/ventes.js
// @downloadURL  https://raw.githubusercontent.com/lax3is/ventes/refs/heads/main/ventes.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function colorCancelledRows() {
        // On ne cible que les pages de liste de commandes
        if (!window.location.href.includes('model=sale.order') || !window.location.href.includes('view_type=list')) return;

        // Pour chaque ligne grisée (annulée)
        document.querySelectorAll('table.o_list_table tbody tr.text-muted').forEach(row => {
            row.querySelectorAll('td').forEach(td => {
                td.style.setProperty('color', 'red', 'important');
                // Fond supprimé
            });
        });
    }

    setInterval(colorCancelledRows, 200);
})();
