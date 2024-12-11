配点 : $600$ 点

## 問題文

長さ $2N$ の，英小文字のみからなる文字列 $S$ が与えられます。

$S$ の各文字を赤色か青色かに塗り分ける方法は $2^{2N}$ 通りありますが，このうち以下の条件を満たす塗り分け方は何通りですか？

- 赤色に塗られた文字を**左から右に**読んだ文字列と，青色に塗られた文字を**右から左に**読んだ文字列が一致する

## 制約

- $1 \leq N \leq 18$
- $S$ の長さは $2N$ である
- $S$ は英小文字のみからなる

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$

## 出力

条件を満たす塗り分け方の個数を出力せよ。

```input1
4
cabaacba
```

```output1
4
```

以下の $4$ 通りの塗り分け方が存在します。

- <span style="color:red">c</span><span style="color:blue">a</span><span style="color:blue">b</span><span style="color:blue">a</span><span style="color:red">a</span><span style="color:blue">c</span><span style="color:red">b</span><span style="color:red">a</span>
- <span style="color:red">c</span><span style="color:blue">a</span><span style="color:blue">b</span><span style="color:red">a</span><span style="color:blue">a</span><span style="color:blue">c</span><span style="color:red">b</span><span style="color:red">a</span>
- <span style="color:blue">c</span><span style="color:red">a</span><span style="color:red">b</span><span style="color:red">a</span><span style="color:blue">a</span><span style="color:red">c</span><span style="color:blue">b</span><span style="color:blue">a</span>
- <span style="color:blue">c</span><span style="color:red">a</span><span style="color:red">b</span><span style="color:blue">a</span><span style="color:red">a</span><span style="color:red">c</span><span style="color:blue">b</span><span style="color:blue">a</span>

```input2
11
mippiisssisssiipsspiim
```

```output2
504
```

```input3
4
abcdefgh
```

```output3
0
```

```input4
18
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

```output4
9075135300
```

答えは32bit整数型で表せないこともあります。