配点 : $500$ 点

## 問題文

高橋君は明日からの $N$ 日間のうち $K$ 日を選んで働くことにしました。

整数 $C$ と文字列 $S$ が与えられるので、次の $2$ つの条件を満たすようにして働く日を選びます。

- ある日働いたら、その直後の $C$ 日間は働かない
- $S$ の $i$ 文字目が `x` のとき、今日から $i$ 日後には働かない

高橋君が必ず働く日をすべて求めてください。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq N$
- $0 \leq C \leq N$
- $S$ の長さは $N$
- $S$ の各文字は `o` か `x`
- 問題文中の条件を満たすように働く日を選ぶことが可能

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$ $C$
> 
> $S$

## 出力

高橋君が必ず働く日を昇順に改行区切りですべて出力せよ。

```input1
11 3 2
ooxxxoxxxoo
```

```output1
6
```

高橋君は $11$ 日間のうち $3$ 日働こうとしています。ある日働いたらその後 $2$ 日間は働きません。

働く日としてありえる組み合わせは「$1,6,10$ 日目」「$1,6,11$ 日目」「$2,6,10$ 日目」「$2,6,11$ 日目」の $4$ 通りです。

したがって、$6$ 日目に必ず働きます。

```input2
5 2 3
ooxoo
```

```output2
1
5
```

働く日としてありえる組み合わせは「$1,5$ 日目」のみです。

```input3
5 1 0
ooooo
```

```output3

```

必ず働く日が存在しないこともあります。

```input4
16 4 3
ooxxoxoxxxoxoxxo
```

```output4
11
16
```