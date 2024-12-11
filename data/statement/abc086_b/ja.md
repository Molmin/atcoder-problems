配点 : $200$ 点

## 問題文

シカのAtCoDeerくんは二つの正整数 $a,b$ を見つけました。
$a$ と $b$ をこの順につなげて読んだものが平方数かどうか判定してください。

## 制約

- $1$ $\leq$ $a,b$ $\leq$ $100$
- $a,b$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $a$ $b$

## 出力

$a$ と $b$ をこの順につなげて読んだものが平方数なら `Yes` を、 そうでないなら `No` を出力せよ。

```input1
1 21
```

```output1
Yes
```

$121$ $=$ $11$ × $11$ なので、平方数です。

```input2
100 100
```

```output2
No
```

$100100$ は平方数ではありません。

```input3
12 10
```

```output3
No
```