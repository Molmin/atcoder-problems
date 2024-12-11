配点 : $100$ 点

## 問題文

整数 $A,B$ が与えられるので、 $A+B$ の値を答えてください。<br>
但し、この問題は $N$ 択問題であり、 $i$ 番の選択肢は $C_i$ です。<br>
正解となる **選択肢の番号** を出力してください。

## 制約

- 入力は全て整数
- $1 \le N \le 300$
- $1 \le A,B \le 1000$
- $1 \le C_i \le 2000$
- $C_i$ は相異なる。すなわち、同じ選択肢が複数存在することはない。
- $A+B=C_i$ なる $i$ が丁度 $1$ つ存在する。すなわち、正解となる選択肢が必ずただ $1$ つ存在する。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $A$ $B$
> 
> $C_1$ $C_2$ $\dots$ $C_N$

## 出力

答えを整数として出力せよ。

```input1
3 125 175
200 300 400
```

```output1
2
```

$125+175 = 300$ です。<br>
$1$ 番の選択肢は $200$ 、 $2$ 番の選択肢は $300$ 、 $3$ 番の選択肢は $400$ です。<br>
よって正解となる選択肢の番号は $2$ 番であり、これを出力します。

```input2
1 1 1
2
```

```output2
1
```

$1$ 択問題である場合もあります。

```input3
5 123 456
135 246 357 468 579
```

```output3
5
```