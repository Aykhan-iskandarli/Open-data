import LoadingComponent from 'packages/RLoading/loading.component'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/types/store.types'
import "./about.component.scss"
import { getAbout } from './store/action'
import Skeleton from 'react-loading-skeleton'

const AboutComponent = () => {
  const { data } = useSelector((state: RootState) => state.about)
  const { loading } = useSelector((state: RootState) => state.publicState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAbout())
  }, [dispatch])


  const content = useMemo(() => {
    return data ?
      <p>
        {data.text}
      </p>
      : <>
        <Skeleton width={100} height={100} className="mb-16" />
        <Skeleton count={5} height={30} className=" my-8" />
      </>
  }, [data])

  return (
    <>
      <LoadingComponent show={loading} />
      <section className="about_section">
        <div className='container'>
          <div className='row'>
            <div className="col-12">
              <div className="about-content">
                <div className="open_data_about">
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default AboutComponent