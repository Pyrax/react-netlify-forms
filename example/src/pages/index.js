/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx, Button, Box, Field, Textarea } from 'theme-ui'
import { NetlifyForm, Honeypot, Recaptcha } from 'react-netlify-forms'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <NetlifyForm
      name='Contact'
      action='/thanks'
      onFormDataSent={(res) => {
        console.log('Successfully sent form data to Netlify Server' + res)
      }}
    >
      {({ handleChange }) => (
        <Box>
          <Honeypot name='bot-field' label='Leave this field empty:' />
          {/*<Recaptcha siteKey='ejqoweo' invisible={true} />*/}

          <Box pt={2}>
            <Field label='Name:' name='name' onChange={handleChange} />
          </Box>
          <Box pt={2}>
            <Field
              as={Textarea}
              label='Message:'
              name='message'
              onChange={handleChange}
            />
          </Box>

          <Box pt={3}>
            <Button type='submit' variant='success' mr={2}>
              Submit
            </Button>
            <Button type='reset' variant='danger'>
              Reset
            </Button>
          </Box>
        </Box>
      )}
    </NetlifyForm>

    {/*<NetlifyForm
      name='Message'
      action='/msg'
      onFormDataSent={(res) => {
        console.log('Successfully sent message to Netlify Server' + res)
      }}
    >
      {({ handleChange }) => (
        <Box>
          <div>
            <Label htmlFor='input-message'>Message:</Label>
            <Textarea
              name='message'
              id='input-message'
              onChange={handleChange}
            />
          </div>

          <Button type='submit' variant='success'>
            Submit
          </Button>
          <Button type='reset' variant='danger'>
            Reset
          </Button>
        </Box>
      )}
      </NetlifyForm>*/}
  </Layout>
)

export default IndexPage
