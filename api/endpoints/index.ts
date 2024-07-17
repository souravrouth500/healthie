export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const baseUrlApi =  `${process.env.NEXT_PUBLIC_BASE_URL}/api/`;
export const baseUrlMedia = process.env.NEXT_PUBLIC_BASE_URL;

// api doc = https://healthie.dedicateddevelopers.us/docs/api#/

export const mediaUrl = (url: string) => {
    return `${baseUrlMedia}/uploads/${url}`;
}

export const endpoints = {
    auth: {
        signup: "register",
        login: "login",
        profileDetails: "my-profile",
        forgotPassword: "forgot-password",
        passwordReset : "create-new-password",
        profileUpdate: "update-profile",
        passwordUpdate: "change-password",
        profileNotification: "my-notifications"
    },
    cms: {
        pageContent: "contents",
        testimoniallist: "testimonials",
        insuranceList: "insurances",
        categories: "categories",
        myInsurances: "my-insurances",
        contactUs: "contact-us"
    }
};

export const NotificationEndpoints = [
    endpoints.auth.signup,
    endpoints.auth.login,
    endpoints.auth.profileUpdate,
];