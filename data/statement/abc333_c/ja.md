配点 : $300$ 点

## 問題文

十進法ですべての桁の数字が $1$ である整数をレピュニットと呼びます。レピュニットを小さい順に並べると $1,11,111,\ldots$ です。

ちょうど $3$ つのレピュニットの和として表せる整数のうち $N$ 番目に小さいものを求めてください。

## 制約

- $N$ は $1$ 以上 $333$ 以下の整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

答えを出力せよ。

```input1
5
```

```output1
113
```

ちょうど $3$ つのレピュニットの和として表せる整数を小さい順に並べると $3,13,23,33,113,\ldots$ です。例えば $113$ は $113=1+1+111$ と表せます。

$3$ つのレピュニットは相異ならなくてもよいことに注意してください。

```input2
19
```

```output2
2333
```

```input3
333
```

```output3
112222222233
```