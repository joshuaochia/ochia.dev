import React from 'react'
import Layout from "../components/Layout"
import TextHeader from '../components/SubComponents/TextHeader'

const contact = () => {
    return <Layout>
<TextHeader/>
<section class="section--hidden header-2">
    <div class=" container">
        <form>
            <div class="form-row">
                <div class="col-lg-12">
                    <div class="col pt-3">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" placeholder="First name"/>
                    </div>
                    <div class="col pt-4">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last name"/>
                    </div>
                    <div class="col pt-4">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" placeholder="Email Address"/>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="col pt-4">
                        <label for="Message">Message</label>
                        <textarea class="form-control" name="" id="" cols="30" rows="8"></textarea>

                    </div>
                </div>
            </div>
            <div class="col pt-4 text-center">
                <button type="submit" class="btn btn-green btn-lg btn-block">Send the email</button>
            </div>
        </form>
    </div>
</section>
    </Layout>
}

export default contact
