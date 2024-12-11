配点 : $200$ 点

## 問題文

選挙が行われています。  

$N$ 人が投票を行い、$i\,(1 \leq i \leq N)$ 番目の人は $S_i$ という名前の候補者に投票しました。

得票数が最大の候補者の名前を答えてください。なお、与えられる入力では得票数が最大の候補者は一意に定まります。

## 制約

- $1 \leq N \leq 100$
- $S_i$ は英小文字からなる長さ $1$ 以上 $10$ 以下の文字列
- $N$ は整数
- 得票数が最大の候補者は一意に定まる

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## 出力

得票数が最大の候補者の名前を出力せよ。

```input1
5
snuke
snuke
takahashi
takahashi
takahashi
```

```output1
takahashi
```

`takahashi` は $3$ 票、`snuke` は $2$ 票獲得しました。よって `takahashi` を出力します。

```input2
5
takahashi
takahashi
aoki
takahashi
snuke
```

```output2
takahashi
```

```input3
1
a
```

```output3
a
```