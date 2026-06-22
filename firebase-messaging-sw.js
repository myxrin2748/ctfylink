importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyATWmme05sKVI2qCPWvdVP5NFHIQ64eJ-o",
    authDomain: "pusat-link-cattfly.firebaseapp.com",
    projectId: "pusat-link-cattfly",
    storageBucket: "pusat-link-cattfly.firebasestorage.app",
    messagingSenderId: "37808781852",
    appId: "1:37808781852:web:35e5b9d4f1776065bdbdd9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[sw] Received background message:', payload);
    const notificationTitle = payload.notification?.title || 'CTFY Update';
    const notificationOptions = {
        body: payload.notification?.body || 'Ada asset baru!',
        icon: '/icon-192.png',
        badge: '/badge-72.png',
        tag: 'ctfy-update'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
