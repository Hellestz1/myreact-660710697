import React from "react";
function JSXExamples(){
    const greeting = <h1>Hello, React with JSX!!!</h1>;
    const name = 'สมชาย';
    const age = 25;

    const currentYear = new Date().getFullYear();
    
    const user = {
        firstname: 'คณิศร',
        lastname: 'โอภิธากร',
        age : 20,
        hobby : ['ฟังเพลง','เล่นเกม','นอน']
    };
    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };

    const isLoggedIn = true  ;
    const hasNotification = 3;
    return (
        <div className="jsx-examples">
            <h1>ตัวอย่างการใช้ JSX</h1>
            {/* === 1. การแสดงผลข้อมูลพื้นฐาน === */}
            <section>
                <h2>การแสดงผลข้อมูล</h2>
                {greeting}
                <p>สวัสดีคุณ {user.firstname} อายุ {user.age} ปี</p>
                <p>ปีนี้คือปี {currentYear}</p>
                <p>ชื่อเต็ม {formatName(user)}</p>
            </section>

            {/* === 2. การใช้ Attributes === */}
            <section>
                <h2>Attributes ใน JSX</h2>
                <div className="card">
                    <p className="text-primary">ใช้ classname แทน class</p>
                </div>
                <button onClick={() => alert('clicked!')}
                    onMouseEnter={() => console.log('mouse in')}>
                    Hover or Click
                </button>

                <div style={{
                    backgroundColor: '#E8F5E8',
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '10px'
                }}>
                    <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>
                        Inline styles ใช้ object
                    </p>
                </div>
            </section>

            {/* === 3. Conditional Rendering === */}
            <section>
                <h2>Conditional Rendering</h2>
                {/* ใช้ ternary operator */}
                <p>
                    สถานะ: {isLoggedIn ? 'logged in' : 'Not logged in'}
                </p>
                {/* ใช้ && operator */}
                {hasNotification > 0 && (
                    <div className="notification ">you have new notification</div>
                )}
                {/* ใช้ if-else ผ่าน function */}
                {(() => {
                    if (user.age >= 18){
                        return <p> {formatName(user)} is mature</p>
                    }
                    else{
                        return <p> {formatName(user)} is child</p>
                    }
                })()}

            </section>
        </div>

    );
}
export default JSXExamples;