// {
//     fileds: "string",
//     id: "required|numeric",
//   }

//   {
//     errors: {
//       fileds: ["required", "numeric"],
//       id: ["string"],
//     },
//   }

module.exports = function validateRuleToDefinition(rules) {
    let errors = {};
    Object.keys(rules).forEach(rule => {
        errors[rule.replace(/\*/g, '[i]')] = rules[rule].split('|');
    });
    return { errors };
};
