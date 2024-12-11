配点 : $100$ 点

## 問題文

高橋君は，いつも頭の中に整数を $1$ つ思い浮かべています．

はじめ，高橋君が思い浮かべている整数は $0$ です．
これから，高橋君は `+` または `-` の記号を，あわせて $4$ つ食べようとしています．
高橋君が `+` を食べると，思い浮かべている整数は $1$ 大きくなります．
一方，高橋君が `-` を食べると，思い浮かべている整数は $1$ 小さくなります．

高橋君が食べようとしている記号は，文字列 $S$ で与えられます．
$S$ の $i$ 文字目は，高橋君が $i$ 番目に食べる記号です．

すべての記号を食べ終わった後，高橋君が思い浮かべている整数を求めてください．

## 制約

- $S$ の長さは $4$
- $S$ の各文字は `+` または `-`

## 入力

入力は以下の形式で標準入力から与えられる．

> $S$

## 出力

すべての記号を食べ終わった後，高橋君が思い浮かべている整数を出力せよ．

```input1
+-++
```

```output1
2
```

- はじめ，高橋君が思い浮かべている整数は $0$ です．
- 高橋君が食べる $1$ 番目の記号は `+` です．これを食べた後，高橋君が思い浮かべている整数は $1$ になります．
- 高橋君が食べる $2$ 番目の記号は `-` です．これを食べた後，高橋君が思い浮かべている整数は $0$ になります．
- 高橋君が食べる $3$ 番目の記号は `+` です．これを食べた後，高橋君が思い浮かべている整数は $1$ になります．
- 高橋君が食べる $4$ 番目の記号は `+` です．これを食べた後，高橋君が思い浮かべている整数は $2$ になります．

よって，すべての記号を食べ終わった後，高橋君が思い浮かべている整数は $2$ です．

```input2
-+--
```

```output2
-2
```

```input3
----
```

```output3
-4
```