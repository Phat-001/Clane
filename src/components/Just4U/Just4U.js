import React from 'react';
import styles from './Just4U.module.scss';

import {Button, Product} from '../../components';

function Just4U({propsJust}) {
  return (
    <div className={styles.Just4U}>
          <div className='container'>
               <div className="row">
                    <div className='col-12 col-md-6'>
                         <div className={styles.left}>
                              <img src={propsJust.image} alt="Just for you" />
                              <div className={styles.btn__j4u}><Button props={propsJust.btn}/></div>
                         </div>
                    </div>
                    <div className='col-12 col-md-6'>
                         <div className={styles.right}>
                              <div>
                              <h3>{propsJust.title}</h3>
                              <p>{propsJust.description}</p>
                              <div className="row">
                                   <div className="col-6">
                                        <Product props={propsJust.product1}/>
                                   </div>
                                   <div className="col-6">
                                   <Product props={propsJust.product2}/>
                                   </div>
                              </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
    </div>
  )
}

export default Just4U