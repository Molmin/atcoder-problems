配点 : $300$ 点

## 問題文

$N$ 枚の ID カードと $M$ 個のゲートがあります。

$i$ 番目のゲートは $L_i, L_i+1, ..., R_i$ 番目の ID カードのうちどれか $1$ 枚を持っていれば通過できます。

$1$ 枚だけで全てのゲートを通過できる ID カードは何枚あるでしょうか。

## 制約

- 入力は全て整数である。
- $1 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- $1 \leq L_i \leq R_i \leq N$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_M$ $R_M$

## 出力

$1$ 枚だけで全てのゲートを通過できる ID カードの枚数を出力せよ。

```input1
4 2
1 3
2 4
```

```output1
2
```

以下のように、$1$ 枚だけで全てのゲートを通過できる ID カードは $2$ 枚です。

- $1$ 番目の ID カードでは $2$ 番目のゲートを通過できません。
- $2$ 番目の ID カードでは全てのゲートを通過できます。
- $3$ 番目の ID カードでは全てのゲートを通過できます。
- $4$ 番目の ID カードでは $1$ 番目のゲートを通過できません。

```input2
10 3
3 6
5 7
6 9
```

```output2
1
```

```input3
100000 1
1 100000
```

```output3
100000
```