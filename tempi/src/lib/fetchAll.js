import { getCartData, getCartEvent, getCartMentors, getCartRound, getCompetitionGoals, getPrizes, getformFields, getaddressInfo, getcontactInfo } from "./api";

export async function fetchAllData() {
    try {
        const [cartData, cartEvent, cartMentors, cartRound, competitionGoals, prizes, formFields, addressInfo, contactInfo,
        ] = await Promise.all([
            getCartData(),
            getCartEvent(),
            getCartMentors(),
            getCartRound(),
            getCompetitionGoals(),
            getPrizes(),
            getformFields(),
            getaddressInfo(),
            getcontactInfo(),
        ]);

        return {
            cartData,
            cartEvent,
            cartMentors,
            cartRound,
            competitionGoals,
            prizes,
            formFields,
            addressInfo,
            contactInfo,
        };
    } catch (error) {
        console.error("Failed to fetch all data:", error);
        return {
            cartData: [],
            cartEvent: [],
            cartMentors: [],
            cartRound: [],
            competitionGoals: [],
            prizes: [],
            formFields: [],
            addressInfo: [],
            contactInfo: [],
        };
    }
}
