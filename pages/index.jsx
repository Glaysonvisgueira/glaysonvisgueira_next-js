import React, { Component } from "react";
import styled from "styled-components";

//Custom components
import LayoutTemplate from '@/components/LayoutTemplate';
import Head from '@/components/Head';
import SocialNetworkRowStack from '@/components/SocialNetworkRowStack';

export default function HomePage(props) {
  return (
    <LayoutTemplate>
      <Head title="Homepage" metaDescription="" keywords=""/>
        <SocialNetworkRowStack />      
    </LayoutTemplate>
  )
}
