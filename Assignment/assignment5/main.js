// ==========================================
// Assignment 5: JavaScript Post and Reply
// ==========================================

window.onload = setupFunction;

function setupFunction() {
    // 1. กำหนดข้อความหัวข้อของหน้าเว็บที่ id="top"
    document.getElementById("top").innerHTML = "Welcome to the Forum";
}

// 2. สร้างตัวแปรนับลำดับการโพสต์ชื่อว่า postCount และกำหนดค่าเริ่มต้นเป็น 0
let postCount = 0;

function postFunction() {
    // 1. อ่านค่าข้อความจาก textarea (id="message")
    let messageText = document.getElementById("message").value;

    // เช็คว่าถ้าไม่ได้พิมพ์ข้อความอะไรมา ไม่ต้องทำอะไร
    if (messageText.trim() === "") {
        return;
    }

    // 2. นำข้อความไปใส่ในแต่ละกล่องตามลำดับ
    if (postCount === 0) {
        // ครั้งที่ 1 ใส่ใน id="topic"
        document.getElementById("topic").innerHTML = messageText;
        postCount++;
    } else if (postCount === 1) {
        // ครั้งที่ 2 ใส่ใน id="reply1"
        document.getElementById("reply1").innerHTML = messageText;
        postCount++;
    } else if (postCount === 2) {
        // ครั้งที่ 3 ใส่ใน id="reply2"
        document.getElementById("reply2").innerHTML = messageText;
        postCount++;
    }

    // 3. เคลียร์ข้อความใน textarea ให้ว่างหลังจากโพสต์
    document.getElementById("message").value = "";
}

function clearFunction() {
    // 1. ล้างข้อความใน (id="topic", id="reply1", id="reply2")
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";

    // 2. ล้างข้อความใน textarea (id="message")
    document.getElementById("message").value = "";

    // 3. รีเซ็ตตัวแปร postCount กลับเป็นค่าเริ่มต้น (0)
    postCount = 0;
}