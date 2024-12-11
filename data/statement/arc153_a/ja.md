配点 : $300$ 点

## 問題文

正整数 $x$ が**美しい整数**であるとは，$x$ が $9$ 桁の整数であり，その $10$ 進法表記 $S_1\ldots S_9$ （$S_i$ は $x$ の $10$ 進法表記の $i$ 文字目）が以下の条件をすべて満たすことをいいます：

- $S_1$ は `0` ではない
- $S_1 = S_2$
- $S_5 = S_6$
- $S_7 = S_9$

例えば $998244353$ や $333333333$ は美しい整数です．$111112222$ は $S_5 \neq S_6$ であるため美しい整数ではありません．

正の整数 $N$ が与えられます．小さい方から数えて $N$ 番目の美しい整数を答えてください．

## 制約

- $N$ は正の整数
- 美しい整数が $N$ 個以上存在する

## 入力

入力は以下の形式で標準入力から与えられます．

> $N$

## 出力

小さい方から数えて $N$ 番目の美しい整数を出力してください．

```input1
3
```

```output1
110000020
```

美しい整数を小さい順に並べると，$110000000, 110000010, 110000020, \ldots$ となります．

```input2
882436
```

```output2
998244353
```

```input3
2023
```

```output3
110200222
```