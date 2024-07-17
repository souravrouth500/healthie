
export interface IPageContent {
    success: boolean
    statusCode: number
    message: string
    data: IPageContentData
}

export interface IPageContentData {
    pageContents: IPageContents
    usps: IUsp[]
    detailedBenifits: IDetailedBenifit[]
    aboutusTeamDetails: IAboutusTeamDetail[]
}

export interface IPageContents {
    logo: string
    date_format: string
    per_page: string
    main_color: string
    hover_color: string
    button_color: string
    happy_clients: string
    fb_link: string
    insta_link: string
    twitter_link: string
    linkedin_link: string
    call_now: string
    pre_header: string
    main_headline: string
    sub_headline: string
    brief_introduction: string
    bold_text_brief_introduction: string
    states_licensed: string
    address: string
    email_address: string
    licensed_agent_email: string
    availability_text: string
    who_we_are: string
    our_mission: string
    our_value: string
    banner_heading: string
    banner_sub_heading: string
    introduction_heading: string
    footer_paragraph: string
    home_option: string
    contact_us_get_in_touch_sub_para: string
    introduction_heading_image: string
    contact_a_licensed_agent_image: string
    home_page_banner_logo: string
    home_page_banner_video: string
    who_we_are_image: string
    country_code_of_call_now: string
    contact_a_licensed_agent_phone: string
    contact_us_email_body: string
    order_email_body: string
    contact_us_email_sub: string
    order_email_sub: string
}

export interface IUsp {
    title: string
    description: string
    photo: string
}

export interface IDetailedBenifit {
    title: string
    description: any
    photo: string
    benifit_array: string[]
}

export interface IAboutusTeamDetail {
    name: string
    designation: string
    fb_link?: string
    insta_link?: string
    thread_link?: string
    linkedin_link: string
    profile_photo_path: string
}