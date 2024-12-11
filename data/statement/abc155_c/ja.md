配点: $300$ 点

## 問題文

$N$ 枚の投票用紙があり、$i\ (1 \leq i \leq N)$ 枚目には文字列 $S_i$ が書かれています。

書かれた回数が最も多い文字列を全て、辞書順で小さい順に出力してください。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $S_i$ は英小文字のみからなる文字列 $(1 \leq i \leq N)$
- $S_i$ の長さは $1$ 以上 $10$ 以下 $(1 \leq i \leq N)$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$
> 
> $:$
> 
> $S_N$

## 出力

あてはまる文字列を全て辞書順で小さい順に、改行区切りで出力せよ。

```input1
7
beat
vet
beet
bed
vet
bet
beet
```

```output1
beet
vet
```

書かれた回数は `beet` と `vet` が $2$ 回、`beat` と `bed` と `bet` が $1$ 回です。したがって、$2$ 回書かれた `beet` と `vet` を出力します。

```input2
8
buffalo
buffalo
buffalo
buffalo
buffalo
buffalo
buffalo
buffalo
```

```output2
buffalo
```

```input3
7
bass
bass
kick
kick
bass
kick
kick
```

```output3
kick
```

```input4
4
ushi
tapu
nichia
kun
```

```output4
kun
nichia
tapu
ushi
```