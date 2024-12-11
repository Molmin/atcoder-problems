配点 : $300$ 点

## 問題文

空の箱があります。<br>
髙橋君は以下の $2$ 種類の魔法を好きな順番で好きな回数使えます。

- 魔法 $A$ ：箱の中にボールを $1$ つ増やす
- 魔法 $B$ ：箱の中のボールの数を $2$ 倍にする

合計 **$\mathbf{120}$ 回以内**の魔法で、箱の中のボールの数をちょうど $N$ 個にする方法を $1$ つ教えてください。<br>
なお、与えられた制約のもとで条件を満たす方法が必ず存在することが示せます。  

魔法以外の方法でボールの数を変化させることはできません。  

## 制約

- $1 \leq N \leq 10^{18}$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

`A` , `B` のみからなる文字列 $S$ を出力せよ。<br>
$S$ の $i$ 文字目が `A` ならば、髙橋君が $i$ 回目に使う魔法が魔法 $A$ であることを表し、`B` ならば魔法 $B$ であることを表す。

$S$ の長さは **$\mathbf{120}$ 以下**でなければならない。  

```input1
5
```

```output1
AABA
```

ボールの数は、$0 \xrightarrow{A} 1\xrightarrow{A} 2 \xrightarrow{B}4\xrightarrow{A} 5$ と変化します。<br>
`AAAAA` などの答えも正解になります。  

```input2
14
```

```output2
BBABBAAAB
```

ボールの数は、$0 \xrightarrow{B} 0 \xrightarrow{B} 0 \xrightarrow{A}1 \xrightarrow{B} 2 \xrightarrow{B} 4 \xrightarrow{A}5 \xrightarrow{A}6 \xrightarrow{A} 7 \xrightarrow{B}14$ と変化します。<br>
$S$ の長さを最小化する必要はありません。