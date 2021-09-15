//  先声明一些工具函数和常量
const radix = 16777216;
const radix_squared = 16777216 * 16777216;
const log2_radix = 24;//每个元素到底代表几位比较合适呢？----24位的
const plus = '+';
const minus = '-';
const sign = 0;// 符号位
const least = 1;

function last(array) {
  return array[array.length - 1];
}

function next_to_last(array) {
  return array[array.length - 2];
}

const zero = Object.freeze([plus]);
const wun = Object.freeze([plus,1]);
const two = Object.freeze([plus,2]);
const ten = Object.freeze([plus,10]);
const negative_wun = Object.freeze([minus, 1]);

// 编写几个检测函数，用于检测正负高精度整数
function is_big_integer(big) {
  return Array.isArray(big) && (big[sign] === plus || big[sign] === minus);
}

function is_negative(big) {
  return Array.isArray(big) && big[sign] === minus;
}

function is_positive(big) {
  return Array.isArray(big) && big[sign] === plus;
}

function is_zero(big) {
  return !Array.isArray(big) || big.length < 2;
}

//?? mint函数。它会清除最后是0的几位，然后将数组与几个常量逐一对比。
function mint(proto_big_integer) {
  while (last(proto_big_integer) === 0) {
    proto_big_integer.length -= 1;
  }

  if (proto_big_integer.length <= 1) {
    return zero;
  }

  if (proto_big_integer[sign] === plus) {
    if (proto_big_integer.length === 2) {
      if (proto_big_integer[least] === 1) {
        return wun;
      }

      if (proto_big_integer[least] === 2) {
        return two;
      }

      if (proto_big_integer[least] === 10) {
        return ten;
      }
    }
  } else if (proto_big_integer.length === 2) {
    if (proto_big_integer[least] === 1) {
      return negative_wun;
    }
  }

  return Object.freeze(proto_big_integer);
}

// 正负取反
function neg(big) {
  if (is_zero(big)) {
    return zero;
  }

  let negation = big.slice();
  negation[sign] = (is_negative(big) ? plus : minus);

  return mint(negation);
}

// 取绝对值
function abs(big) {
  return (
    is_zero(big)
      ? zero
      : (
        is_negative(big)
          ? neg(big)
          : big
      )
  )
}

// 提取符号位
function signum(big) {
  return (
    is_zero(big)
      ? zero
      : (
        is_negative(big)
          ? negative_wun
          : wun
      )
  )
}

// eq函数： 判断两个高精度整数的每位是不是都一样。
function eq(comparahend, comparator) {
  return comparahend === comparator || (
    comparahend.length === comparator.length && comparahend.every(function (element, element_nr) {return element === comparator[element_nr];})
  )
}
// 符号位  指数位  有效位数
// abs_lt 函数用于判断一个高精度整数的绝对值是否小于另一个的绝对值。
function abs_lt(comparahend, comparator) {
  // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  return (
    comparahend.length === comparator.length
      ? comparahend.reduce(function (reduction, element, element_nr) {
        if (element_nr !== sign) {
          const other = comparator[element_nr];
          if (element !== other) {
            return element < other;
          }
        }
        return reduction;
      },
        false
      )
      : comparahend.length < comparator.length
  );
}

export default Object.freeze({
  abs,
  abs_lt,
  add,
  and,
  div,
  divrem,
  eq,
  gcd,
  is_big_integer,
  is_negative,
  is_positive,
  is_zero,
  lt,
  make,
  mul,
  neg,
  not,
  number,
  or,
  population,
  power,
  random,
  shift_down,
  shift_up,
  significant_bits,
  signum,
  string,
  sub,
  ten,
  two,
  wun,
  xor,
  zero
});