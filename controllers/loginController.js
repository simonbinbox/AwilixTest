export default function() {
    async function testFunction(req, res, next) {
        return true;
    }

    return {
        testFunction
    }
}