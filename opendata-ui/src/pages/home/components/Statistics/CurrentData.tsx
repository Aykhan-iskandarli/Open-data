import React from 'react'

const CurrentData = () => {
    return (
        <section className="currentData">
            <p className="section-title">Cari göstəricilər</p>
            <p className="section-subtitle">2022-ci il üzrə məlumatlar</p>
            <ul className="data-list">
                <li className="data-list_item">
                    <p className='data-list_type'>Ümumi</p>
                    <p className='data-list_count'>789</p>
                </li>
                <li className="data-list_item">
                    <p className='data-list_type'>Ay</p>
                    <p className='data-list_count'>789</p>
                </li>
                <li className="data-list_item">
                    <p className='data-list_type'>Həftə</p>
                    <p className='data-list_count'>789</p>
                </li>
                <li className="data-list_item">
                    <p className='data-list_type'>Gün</p>
                    <p className='data-list_count'>789</p>
                </li>
            </ul>
        </section>
    )
}

export default CurrentData