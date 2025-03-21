配点 : $350$ 点

## 問題文

$10$ 以上の正整数のうち、十進数表記したときに先頭の桁（最も大きい位）の数字がそれ以外のどの桁の数字よりも真に大きくなるようなものを **ヘビ数** とよびます。
例えば、$31$ や $201$ はヘビ数ですが、$35$ や $202$ はヘビ数ではありません。

$L$ 以上 $R$ 以下のヘビ数が何個あるか求めてください。

## 制約

- $10\leq L \leq R \leq 10^{18}$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $L$ $R$

## 出力

答えを出力せよ。

```input1
97 210
```

```output1
6
```

$97$ 以上 $210$ 以下のヘビ数は、$97,98,100,200,201,210$ の $6$ 個です。

```input2
1000 9999
```

```output2
2025
```

```input3
252509054433933519 760713016476190692
```

```output3
221852052834757
```