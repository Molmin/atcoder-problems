配点 : $300$ 点

## 問題文

ある銀行では、お金の引き出しを難しくするために、一回の操作で引き出せる金額が以下のいずれかとなっています。

- <p>$1$ 円</p>
- <p>$6$ 円、$6^2(=36)$ 円、$6^3(=216)$ 円、$...$</p>
- <p>$9$ 円、$9^2(=81)$ 円、$9^3(=729)$ 円、$...$</p>

この銀行からちょうど $N$ 円を引き出すには少なくとも何回の操作が必要か求めてください。

ただし、一度引き出したお金を再び預け入れてはならないとします。

## 制約

- $1 \leq N \leq 100000$
- $N$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

この銀行からちょうど $N$ 円を引き出すのに少なくとも $x$ 回の操作が必要な時、$x$ を出力せよ。

```input1
127
```

```output1
4
```

$1$ 円、$9$ 円、$36(=6^2)$ 円、$81(=9^2)$ 円を引き出す操作をそれぞれ $1$ 回ずつ行うことで、合計 $4$ 回の操作で $127$ 円を引き出すことができます。

```input2
3
```

```output2
3
```

$1$ 円を 引き出す操作を $3$ 回 行うことで、合計 $3$ 回の操作で $3$ 円を引き出すことができます。

```input3
44852
```

```output3
16
```