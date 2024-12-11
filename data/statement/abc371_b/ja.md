配点 : $200$ 点

## 問題文

AtCoder 王国では、長男に必ず「太郎」という名前を付けます。長男以外には「太郎」という名前は付けません。
長男とは、各家で生まれた男の子のうち最も早く生まれた者を指します。

AtCoder 王国には $N$ 戸の家があり、$M$ 人の赤子が生まれました。また、$M$ 人の赤子が生まれる前には、$N$ 戸のどの家も赤子が生まれたことはありませんでした。

赤子の情報が生まれの時系列順に与えられます。

$i$ 番目に生まれた赤子は、$A_i$ 番目の家で生まれ、$B_i$ が `M` のとき男の子、`F` のとき女の子です。

$M$ 人の赤子それぞれについて、付けられた名前が「太郎」か判定してください。

## 制約

- $1\leq N,M\leq 100$
- $1\leq A_i\leq N$
- $B_i$ は `M` または `F`
- 入力される数値は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## 出力

$M$ 行出力せよ。

$i\ (1\leq i \leq M)$ 行目には、$i$ 番目に生まれた赤子の名前が「太郎」ならば `Yes` を、そうでない場合 `No` を出力せよ。

```input1
2 4
1 M
1 M
2 F
2 M
```

```output1
Yes
No
No
Yes
```

$1$ 番目に生まれた赤子は、家 $1$ で生まれた男の子のうち最も早く生まれた者なので「太郎」です。

一方、$2$ 番目に生まれた赤子は、家 $1$ で生まれた男の子のうち最も早く生まれた者ではないので「太郎」ではありません。

$3$ 番目に生まれた赤子は、女の子なので「太郎」ではありません。

$4$ 番目に生まれた赤子は、家 $2$ で生まれた**男の子**のうち最も早く生まれた者なので「太郎」です。$3$ 番目に生まれた赤子も家 $2$ で生まれていますが、男の子のうち最も早く生まれた者を「太郎」と名付けることに注意してください。

```input2
4 7
2 M
3 M
1 F
4 F
4 F
1 F
2 M
```

```output2
Yes
Yes
No
No
No
No
No
```