import PropTypes from 'prop-types';
import { Component } from "react";
import { FcSearch } from 'react-icons/fc';
import { Formik, ErrorMessage,} from "formik";
import { FormWrapper, SearchForm, SearchButton,ButtonLabel,Input } from "./Searchbar.styled";
import * as yup from 'yup'

export class Searchbar extends Component {
  state = {
    inputParam: ''
  }

  schema = yup.object().shape({
    inputParam: yup.string().required().trim()
  })

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit({
      inputParam: values.inputParam,
       
    })
    resetForm();
  }

  render() {
    return (
      <Formik
          initialValues={this.state}
          onSubmit={this.handleSubmit}
          validationSchema={this.schema}
        >
        <FormWrapper>
         <SearchForm >
            <SearchButton type="submit" > <FcSearch />
              <ButtonLabel >Search</ButtonLabel>
            </SearchButton>
            <Input
              type="text"
              name="inputParam"
              placeholder="Search images and photos"
            />
            <ErrorMessage name="inputParam" />
          </SearchForm> 
        </FormWrapper>
        </Formik>
    )
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}
