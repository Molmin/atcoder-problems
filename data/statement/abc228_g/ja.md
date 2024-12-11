配点 : $600$ 点

## 問題文

縦 $H$ 行、横 $W$ 列のマス目があり、それぞれのマスには $1$ から $9$ のいずれかの数字が書かれています。
$1 \leq i \leq H$ かつ $1 \leq j \leq W$ を満たす整数の組 $(i, j)$ それぞれについて、上から $i$ 行目、 左から $j$ 列目のマスに書かれた数字は $c_{i, j}$ です。

高橋君と青木君はこのマス目を使って $2$ 人で遊びます。
まず、高橋君がいずれか $1$ つのマスを選び、そのマスにコマを置きます。その後、$2$ 人は下記の手順 1. から 4. を $N$ 回繰り返します。

1. 高橋君が次の $2$ つのうちどちらか一方を行う。1.    - 現在コマが置かれているマスと**同じ行**にある別のマスに、コマを移動する。
2.    - 何もしない。
2. 高橋君が、現在コマが置かれているマスに書かれた数字を黒板に書く。
3. 青木君が次の $2$ つのうちどちらか一方を行う。1.    - 現在コマが置かれているマスと**同じ列**にある別のマスに、コマを移動する。
2.    - 何もしない。
4. 青木君が、現在コマが置かれているマスに書かれた数字を黒板に書く。

その後、黒板には $2N$ 個の数字が書かれています。それらの数字を黒板に書かれたのが早い順番に並べたものを $d_1, d_2, \ldots, d_{2N}$ とします。
$2$ 人は $2N$ 個の数字をこの順番で繋げて $2N$ 桁の整数 $X := d_1d_2\ldots d_{2N}$ を作ります。

整数 $X$ としてあり得るものが何通りあるかを、$998244353$ で割った余りを出力してください。

## 制約

- $2 \leq H, W \leq 10$
- $1 \leq N \leq 300$
- $1 \leq c_{i, j} \leq 9$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$ $N$
> 
> $c_{1, 1}$$c_{1, 2}$$\cdots$$c_{1, W}$
> 
> $c_{2, 1}$$c_{2, 2}$$\cdots$$c_{2, W}$
> 
> $\vdots$
> 
> $c_{H, 1}$$c_{H, 2}$$\cdots$$c_{H, W}$

## 出力

整数 $X$ としてあり得るものが何通りあるかを、$998244353$ で割った余りを出力せよ。

```input1
2 2 1
31
41
```

```output1
5
```

例えば、以下の進行が考えられます。

- まず高橋君がマス $(1, 2)$ にコマを置く。
- 高橋君がコマをマス $(1, 2)$ からマス $(1, 1)$ に動かす。その後、マス $(1, 1)$ に書かれた数字 $3$ を黒板に書く。
- 青木君がコマをマス $(1, 1)$ からマス $(2, 1)$ に動かす。その後、マス $(2, 1)$ に書かれた数字 $4$ を黒板に書く。

この場合、$X = 34$ となります。<br>
他の例として、以下の進行も考えられます。

- まず高橋君がマス $(2, 2)$ にコマを置く。
- 高橋君がコマをマス $(2, 2)$ から動かさず、マス $(2, 2)$ に書かれた数字 $1$ を黒板に書く。
- 青木君がコマをマス $(2, 2)$ からマス $(1, 2)$ に動かす。その後、マス $(1, 2)$ に書かれた数字 $1$ を黒板に書く。

この場合、$X = 11$ となります。<br>
$X$ としてあり得る整数は、上記の例で示した $34, 11$ の他にも $33, 44, 43$ があります。また、それら以外の整数が $X$ となることはありえません。<br>
$X$ としてあり得る整数の個数は $5$ 個であるので $5$ を出力します。

```input2
2 3 4
777
777
```

```output2
1
```

整数 $X$ としてあり得るのは、$77777777$ のみです。

```input3
10 10 300
3181534389
4347471911
4997373645
5984584273
1917179465
3644463294
1234548423
6826453721
5892467783
1211598363
```

```output3
685516949
```

$998244353$ で割った余りを出力することに注意して下さい。