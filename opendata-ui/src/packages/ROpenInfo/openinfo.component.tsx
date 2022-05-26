import ButtonComponent from 'packages/RButton/button.component'
import ProgressComponent from 'packages/RProgress/progress.component'
import './openInfo.component.scss'

const OpenInfo = () => {
  return (
    <section className="open-info">
    <div className='container'>
      <div className="row">
        <div className="col-6">
          <div className="open-info-content">
            <h2>Açıq məlumatlar</h2>
            <p>
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content
              here, content here', making it look like readable English.{" "}
            </p>
            <ButtonComponent classNames="primary-btn btn--rounded-circle ">Daha çox</ButtonComponent>
          </div>
        </div>
        <div className="col-6">
          <ProgressComponent text="Ailə" className="light-green" width={"60%"}/>
          <ProgressComponent text="Biznes" className="blue" width={"50%"}/>
          <ProgressComponent text="Ekologiya" className="light-green" width={"90%"}/>
          <ProgressComponent text="Səhiyyə" className="blue" width={"40%"}/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OpenInfo