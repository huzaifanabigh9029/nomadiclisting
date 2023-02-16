import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          
			          <h1 className="section-title">Whe We Are</h1>
			        </div>
			      </div>
			    </div>
			    <div className="">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p> 
						What is the Ad owner’s perspective when they promote their commodity/service?, 
						what the major elements the Ad viewer is interested in when viewing/searching Ads?, 
						and what are the preferred channels for both parties to communicate and close their
						 win-win deal?, These were the questions that formulated 808080 App.</p>
			            
						<p> 
						In 808080 App you can browse hundreds of carefully designed categories of interest 
						with thousands of classified and commercial Ads for free, you can search and filter 
						in many ways to easily reach ads of your interest only and you can post your Ads in only
						 few clicks adding as many details as you feel enough to properly represent and promote
						  your commodity/service, and then select the communication channel(s) you prefer to close deals with.</p>
			            <div className="ltn__testimoni-info-inner">
			            </div>
			          </div>
			        </div>
			      </div>
			  </div>
			</div>

        }
}

export default Testimonial