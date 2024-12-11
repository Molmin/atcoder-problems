配点 : $100$ 点

## 問題文

シカのAtCoDeerくんとTopCoDeerくんが「正直者か嘘つきか」ゲームをしています。
このゲームでは、正直者は常にほんとうのことを言い、嘘つきは常に嘘を言います。
文字 $a$ と $b$ が入力として与えられます。これらはそれぞれ `H` か `D` のどちらかです。

$a$=`H` のとき、AtCoDeerくんは正直者です。
$a$=`D` のとき、AtCoDeerくんは嘘つきです。
$b$=`H` のとき、AtCoDeerくんは「TopCoDeerくんは正直者だ」と発言しています。
$b$=`D` のとき、AtCoDeerくんは「TopCoDeerくんは嘘つきだ」と発言しています。

これらから判断して、TopCoDeerくんが正直者かどうか判定してください。

## 制約

- $a$=`H` または `D`
- $b$=`H` または `D`

## 入力

入力は以下の形式で標準入力から与えられる。

> $a$ $b$

## 出力

TopCoDeerくんが正直者なら `H` を、嘘つきなら `D` を出力せよ。

```input1
H H
```

```output1
H
```

AtCoDeerくんは正直者なので、AtCoDeerくんの言っているとおりTopCoDeerくんは正直者です。

```input2
D H
```

```output2
D
```

今度はAtCoDeerくんは嘘つきなので、AtCoDeerくんの言っていることとは異なりTopCoDeerくんは嘘つきです。

```input3
D D
```

```output3
H
```