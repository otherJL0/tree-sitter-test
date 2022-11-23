module.exports = grammar({
  name: 'test',

  rules: {
    test_file: $ => repeat(seq($.banner, $.snippet, $.s_expression)),
  }
});

