配点 : $550$ 点

## 問題文

AtCoder 王国には町 $1,$ 町 $2,\ldots,$ 町 $N$ の $N$ 個の町があります。
町 $i$ から町 $j$ まで移動するには通行料が $C\times|i-j|$ 円かかります。

商人である高橋君は、これから開催される $M$ 回の市場のうち $0$ 回以上に参加しようと思っています。

$i$ 回目 $(1\leq i\leq M)$ の市場の情報は整数の組 $(T _ i,P _ i)$ で表され、$i$ 回目の市場が町 $T _ i$ で行われ、高橋君が参加すると $P _ i$ 円が得られることを意味します。

すべての $1\leq i\lt M$ について、$i$ 回目の市場が終了してから $i+1$ 回目の市場が開始します。
高橋君が移動するのにかかる時間は無視できるものとします。

高橋君は、はじめ $10 ^ {10 ^ {100}}$ 円持っており、町 $1$ にいます。
参加する市場をうまく選び、うまく移動することによって高橋君が得られる儲けの最大値を求めてください。

厳密には、$M$ 回の市場が終わったあとの所持金を最大化するように高橋君が行動した場合の最終的な高橋君の所持金を $10 ^ {10 ^ {100}}+X$ として、$X$ を求めてください。

## 制約

- $1\leq N\leq2\times10 ^ 5$
- $1\leq C\leq10 ^ 9$
- $1\leq M\leq2\times10 ^ 5$
- $1\leq T _ i\leq N\ (1\leq i\leq M)$
- $1\leq P _ i\leq10 ^ {13}\ (1\leq i\leq M)$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $C$
> 
> $M$
> 
> $T _ 1$ $P _ 1$
> 
> $T _ 2$ $P _ 2$
> 
> $\vdots$
> 
> $T _ M$ $P _ M$

## 出力

答えを出力せよ。

```input1
6 3
4
5 30
2 10
4 25
2 15
```

```output1
49
```

たとえば、高橋君が次のように行動することで、所持金を $49$ 円増やすことができます。

- 町 $5$ に移動する。所持金が $10 ^ {10 ^ {100}}-12$ 円になる。
- $1$ 回目の市場に参加する。所持金が $10 ^ {10 ^ {100}}+18$ 円になる。
- 町 $4$ に移動する。所持金が $10 ^ {10 ^ {100}}+15$ 円になる。
- $3$ 回目の市場に参加する。所持金が $10 ^ {10 ^ {100}}+40$ 円になる。
- 町 $2$ に移動する。所持金が $10 ^ {10 ^ {100}}+34$ 円になる。
- $4$ 回目の市場に参加する。所持金が $10 ^ {10 ^ {100}}+49$ 円になる。

所持金を $10 ^ {10 ^ {100}}+50$ 円以上にすることはできないため、`49` を出力してください。

```input2
6 1000000000
4
5 30
2 10
4 25
2 15
```

```output2
0
```

通行料が高すぎるので、高橋君は町 $1$ から動かないのが最適です。

```input3
50 10
15
37 261
28 404
49 582
19 573
18 633
3 332
31 213
30 377
50 783
17 798
4 561
41 871
15 525
16 444
26 453
```

```output3
5000
```

```input4
50 1000000000
15
30 60541209756
48 49238708511
1 73787345006
24 47221018887
9 20218773368
34 40025202486
14 28286410866
24 82115648680
37 62913240066
14 92020110916
24 20965327730
32 67598565422
39 79828753874
40 52778306283
40 67894622518
```

```output4
606214471001
```

出力すべき値が $32\operatorname{bit}$ 整数の範囲に収まらない場合があることに注意してください。