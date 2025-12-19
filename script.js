/**
 * Statement of Account (SOA) Generator
 * AMOY Mannequins - Professional Statement Generator
 */

// Password for access
const ACCESS_PASSWORD = 'SOA123456@';

// Company information (fixed)
const COMPANY_INFO = {
    name: 'Abdulrahman Mohamed Othman Yousef EST.',
    address1: 'Al-Madinah Al-Munawwarah Rd',
    address2: 'Jeddah, Kingdom of Saudi Arabia',
    taxNumber: '300786678700003'
};

// Image data for PDF
let logoImageBase64 = '';
let stampImageBase64 = '';

// Load images as base64 for PDF generation
function loadImages() {
    const logoImg = new Image();
    logoImg.crossOrigin = 'Anonymous';
    logoImg.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = logoImg.width;
        canvas.height = logoImg.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(logoImg, 0, 0);
        logoImageBase64 = canvas.toDataURL('image/png');
    };
    logoImg.src = 'attached_assets/logo.png';

    const stampImg = new Image();
    stampImg.crossOrigin = 'Anonymous';
    stampImg.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = stampImg.width;
        canvas.height = stampImg.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(stampImg, 0, 0);
        stampImageBase64 = canvas.toDataURL('image/png');
    };
    stampImg.src = 'attached_assets/stamp.png';
}

// Application state
const state = {
    header: {
        customerName: '',
        statementPeriod: '',
        statementDate: '',
        currency: ''
    },
    invoices: []
};

// DOM Elements
const elements = {
    loginSection: document.getElementById('loginSection'),
    mainApp: document.getElementById('mainApp'),
    loginForm: document.getElementById('loginForm'),
    loginError: document.getElementById('loginError'),
    headerSection: document.getElementById('headerSection'),
    invoiceSection: document.getElementById('invoiceSection'),
    previewSection: document.getElementById('previewSection'),
    headerForm: document.getElementById('headerForm'),
    invoiceForm: document.getElementById('invoiceForm'),
    invoiceTableContainer: document.getElementById('invoiceTableContainer'),
    invoiceTableBody: document.getElementById('invoiceTableBody'),
    editHeaderBtn: document.getElementById('editHeaderBtn'),
    previewBtn: document.getElementById('previewBtn'),
    backToEditBtn: document.getElementById('backToEditBtn'),
