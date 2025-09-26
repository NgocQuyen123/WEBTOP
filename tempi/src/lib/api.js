const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001";

async function fetchAPI(endpoint) {
    try {
        const res = await fetch(`${BASE_URL}/${endpoint}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getCartData() {
    return fetchAPI("cartData");
}

export async function getCartEvent() {
    return fetchAPI("cartEvent");
}

export async function getCartMentors() {
    return fetchAPI("cartMentors");
}

export async function getCartRound() {
    return fetchAPI("cartRound");
}

export async function getCompetitionGoals() {
    return fetchAPI("competitionGoals");
}

export async function getPrizes() {
    return fetchAPI("prizes");
}

export async function getformFields() {
    return fetchAPI("formFields");
}

export async function getaddressInfo() {
    return fetchAPI("addressInfo");
}

export async function getcontactInfo() {
    return fetchAPI("contactInfo");
}