<template>
  <Header>
    <span class="curr"><a href="/">Mac</a></span>
    <span><a href="/">iPad</a></span>
    <span><a href="/">iPhone</a></span>
    <span><a href="/">Watch</a></span>
    <span><a href="/">Music</a></span>
    <span><a href="/">Support</a></span>
    <span class="material-icons icon">
      <a href="/">search</a>
    </span>
  </Header>
  <Affix title='iMac 24"' subtitle="Preview" link="/">
    <span class="curr"><a>Overview</a></span>
    <span><a href="/">Tech Specs</a></span>
    <Button>Order</Button>
  </Affix>

  <notify version="0.0.2">
    <a href="/"> Evaluate COVID‑19 symptoms and understand next steps > </a>
  </notify>
  <div>
    <img src="/static/3dm_1111_in_japan_auto_x2.jpg" />
    <img class="w-full" src="/static/3dm_1111_in_japan.jpg" />
  </div>
  <Button type="button" @click="mask = true"></Button>
  <Mask :status="mask" @input="(v) => (mask = v)"></Mask>
  <Checkbox></Checkbox>
  <bread home />
  <bread home>
    <bread-item><a href="/">a</a></bread-item>
    <bread-item><a href="/">b</a></bread-item>
    <bread-item></bread-item>
  </bread>
  <Footer>
    <Line/>
    <ol class="flex flex-col note">
      <li>
        <a><i>The Croods: A New Age</i></a>
        <span>© 2021 DreamWorks Animation LLC. All rights reserved.</span>
      </li>
      <li>Actual diagonal screen size is 23.5 inches.</li>
      <li>Compared with 21.5-inch iMac.</li>
      <li>
        Testing conducted by Apple in March 2021 using preproduction 24-inch
        iMac systems with Apple M1 chip and 8-core GPU, as well as production
        3.0GHz 6-core Intel Core i5-based 21.5-inch iMac systems with Radeon Pro
        560X with 4GB of GDDR5 memory, all configured with 8GB RAM and 256GB
        SSD. Open source project built with prerelease Xcode 12.5 with Apple
        Clang 12.0.5, Ninja 1.10.0.git, and CMake 3.16.5. Affinity Photo 1.9.1
        tested using the built-in benchmark version 1900. Performance tests are
        conducted using specific computer systems and reflect the approximate
        performance of iMac.
      </li>
      <li>
        Magic Keyboard with Touch ID is included with the 24‑inch iMac systems
        with Apple M1 chip and 8‑core GPU and is available as an option on
        systems with 7‑core GPU.
      </li>
      <li>
        <p>
          Trade-in values vary based on the condition, year, and configuration
          of your trade-in device, and may also vary between online and in-store
          trade-in. You must be at least 18 years old. Apple or its trade-in
          partners reserve the right to refuse or limit any trade-in transaction
          for any reason. In-store trade-in requires presentation of a valid,
          government-issued photo ID (local law may require saving this
          information). Additional terms from Apple or Apple’s trade-in partners
          may apply.
        </p>
        <p>
          Software and content may be sold separately. Title availability is
          subject to change.
        </p>
      </li>
    </ol>
    <p class="note">
      † Apple Card Monthly Installments is available for certain Apple products
      and is subject to credit approval and credit limit. See
      https://support.apple.com/kb/HT211204 for more information about eligible
      products. iPhone activation required on iPhone purchases made at an Apple
      Store with one of these national carriers: AT&T, Sprint, Verizon, or
      T‑Mobile. Variable APRs for Apple Card other than Apple Card Monthly
      Installments range from 10.99% to 21.99% based on creditworthiness. Rates
      as of April 1, 2020. Taxes and shipping are not included in Apple Card
      Monthly Installments and are subject to your standard purchase APR. See
      the Apple Card Customer Agreement for more information. To access and use
      all the features of Apple Card, you must add Apple Card to Wallet on an
      iPhone or iPad with iOS or iPadOS 13.2 or later. Update to the latest
      version of iOS or iPadOS by going to Settings > General > Software Update.
      Tap Download and Install. Available for qualifying applicants in the
      United States. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake
      City Branch.
    </p>
    <Line/>
    <bread home class="mt-1 mb-4">
      <bread-item><a href="/">Mac</a></bread-item>
      <bread-item><a href="/">iMac</a></bread-item>
      <bread-item>iMac 24"</bread-item>
    </bread>
    <nav class="flex flex-row">
      <ul>
        <li><strong>Shop and Learn</strong></li>
        <li><a href="/">Mac</a></li>
        <li><a href="/">iPad</a></li>
        <li><a href="/">iPhone</a></li>
        <li><a href="/">Watch</a></li>
        <li><a href="/">TV</a></li>
        <li><a href="/">Music</a></li>
        <li><a href="/">AirPods</a></li>
        <li><a href="/">HomePod</a></li>
        <li><a href="/">iPod touch</a></li>
        <li><a href="/">AirTag</a></li>
        <li><a href="/">Accessories</a></li>
        <li><a href="/">Gift Cards</a></li>
      </ul>

      <ul>
        <ul>
          <li><strong>Services</strong></li>
          <li><a href="/">Apple Music</a></li>
          <li><a href="/">Apple TV+</a></li>
          <li><a href="/">Apple Fitness+</a></li>
          <li><a href="/">Apple News+</a></li>
          <li><a href="/">Apple Arcade</a></li>
          <li><a href="/">iCloud</a></li>
          <li><a href="/">Apple One</a></li>
          <li><a href="/">Apple Card</a></li>
          <li><a href="/">Apple Books</a></li>
          <li><a href="/">App Store</a></li>
        </ul>

        <ul>
          <li><strong>Account</strong></li>
          <li><a href="/">Manage Your Apple ID</a></li>
          <li><a href="/">Apple Store Account</a></li>
          <li><a href="/">iCloud.com</a></li>
        </ul>
      </ul>

      <ul>
        <li><strong>Apple Store</strong></li>
        <li><a href="/">Find a Store</a></li>
        <li><a href="/">Shop Online</a></li>
        <li><a href="/">Genius Bar</a></li>
        <li><a href="/">Today at Apple</a></li>
        <li><a href="/">Apple Camp</a></li>
        <li><a href="/">Apple Store App</a></li>
        <li><a href="/">Refurbished and Clearance</a></li>
        <li><a href="/">Financing</a></li>
        <li><a href="/">Apple Trade In</a></li>
        <li><a href="/">Order Status</a></li>
        <li><a href="/">Shopping Help</a></li>
      </ul>

      <ul>
        <ul>
          <li><strong>For Business</strong></li>
          <li><a href="/">Apple and Business</a></li>
          <li><a href="/">Shop for Business</a></li>
        </ul>

        <ul>
          <li><strong>For Education</strong></li>
          <li><a href="/">Apple and Education</a></li>
          <li><a href="/">Shop for K-12</a></li>
          <li><a href="/">Shop for College</a></li>
        </ul>

        <ul>
          <li><strong>For Healthcare</strong></li>
          <li><a href="/">Apple in Healthcare</a></li>
          <li><a href="/">Health on Apple Watch</a></li>
          <li><a href="/">Health Records on iPhone</a></li>
        </ul>
        <ul>
          <li><strong>For Government</strong></li>
          <li><a href="/">Shop for Government</a></li>
          <li><a href="/">Shop for Veterans and Military</a></li>
        </ul>
      </ul>

      <ul>
        <ul>
          <li><strong>Apple Values</strong></li>
          <li><a href="/">Accessibility</a></li>
          <li><a href="/">Education</a></li>
          <li><a href="/">Environment</a></li>
          <li><a href="/">Inclusion and Diversity</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Racial Equity and Justice</a></li>
          <li><a href="/">Supplier Responsibility</a></li>
        </ul>

        <ul>
          <li><strong>About Apple</strong></li>
          <li><a href="/">Newsroom</a></li>
          <li><a href="/">Apple Leadership</a></li>
          <li><a href="/">Career Opportunities</a></li>
          <li><a href="/">Investors</a></li>
          <li><a href="/">Ethics & Compliance</a></li>
          <li><a href="/">Events</a></li>
          <li><a href="/">Contact Apple</a></li>
        </ul>
      </ul>
    </nav>
    <p class="text-note">
      More ways to shop: <a>Find an Apple Store</a> or
      <a>other retailer</a> near you. Or call 1-800-MY-APPLE.
    </p>
    <Line />
    <div class="flex flex-wrap">
      <span class="text-note flex-shrink-0 mb-1"
        >Copyright © 2021 Apple Inc. All rights reserved.</span
      >
      <bread symbol="|" class="mb-1 flex-grow">
        <bread-item><a href="/">Privacy Policy</a></bread-item>
        <bread-item><a href="/">Terms of Use</a></bread-item>
        <bread-item><a href="/">Sales and Refunds</a></bread-item>
        <bread-item><a href="/">Legal</a></bread-item>
        <bread-item><a href="/">Site Map</a></bread-item>
      </bread>
      <span class="flex-shrink-0">
        <a> United States </a>
      </span>
    </div>
  </Footer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@apui/button";
import Header from "@apui/header";
import Affix from "@apui/affix";
import Notify from "@apui/notify";
import Line from "@apui/line";
import Bread from "@apui/bread";
import BreadItem from "@apui/bread-item";
import Footer from "@apui/footer";
import Mask from "@apui/mask";
import Checkbox from "@apui/checkbox";

export default defineComponent({
  name: "iMac",

  components: {
    Button,
    Header,
    Affix,
    Notify,
    Line,
    Bread,
    BreadItem,
    Footer,
    Mask,
    Checkbox,
  },
  setup() {
    let mask = ref(false);
    return { mask };
  },
});
</script>

<style scoped></style>
