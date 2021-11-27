import React from "react"
import Layout from "../components/Layout"
import TextHeader from "../components/SubComponents/TextHeader"
import { Helmet } from "react-helmet"

const Contact = () => {
  const header = {
    title: "Contact me",
    description:
      "After sending the email/contact form, expect the response after one-two business days if there's no response send me a personal email at joshua@ochia.dev or joshuacosareochia@gmail.com",
  }

  return (
    <Layout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <TextHeader description={header.description} title={header.title} />
      <section class="section--hidden header-2">
        <div class=" container">
          <form action="https://formspree.io/f/mdoyezar" method="POST">
            <div class="form-row">
              <div class="col-lg-12">
                <div class="col pt-3">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    name="firstname"
                    data-validation-required-message
                    required
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="pt-4">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    name="lastname"
                    data-validation-required-message
                    required
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div class="pt-4">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    data-validation-required-message
                    required
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="pt-4">
                  <label htmlFor="Message">Message</label>
                  <textarea
                    name="message"
                    data-validation-required-message
                    required
                    class="form-control"
                    name=""
                    id=""
                    cols="30"
                    rows="8"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="pt-4 text-center">
              <button id="btn-green" type="submit" class="btn-lg">
                Send the email
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default React.memo(Contact)
