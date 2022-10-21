import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner'
import { LoaderWrapper } from './Loader';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <MagnifyingGlass
       height="80"
       width="80"
       ariaLabel="MagnifyingGlass-loading"         
       glassColor = '#c0efff'
       color = '#e15b64'
      />
    </LoaderWrapper>
    
  );
}