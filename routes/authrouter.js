var express = require('express');
const router = express.Router();

module.exports = router;

var author_array = [
    {
        "bkid":"E01",
        "bktitle":"Amish Tripathi",
        "bkauthor":"Trilogy",
        "bkcategory":"Mythology",
        "bkdescptn":"The Immortals of Meluha is the first novel of the Shiva trilogy series by Amish Tripathi. The story is set in the land of Meluha and starts with the arrival of the Shiva. The Meluhans believe that Shiva is their fabled saviour Neelkanth. Shiva decides to help the Meluhans in their war against the Chandravanshis, who had joined forces with a cursed Nagas; however, during his journey and the fight that ensues, Shiva learns how his choices actually reflect who he aspires to be and how they lead to dire consequences.",
        "bkpages":390,
        "bkprice":250,
        "bkimage":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Amish_Tripathi_Author.JPG/220px-Amish_Tripathi_Author.JPG"
    },
    {
        "bkid":1,
        "bktitle":"THE FAULT IN OUR STARS",
        "bkauthor":"John Green",
        "bkcategory":"Romance",
        "bkdescptn":"The Fault in Our Stars, published in January 2012, is the sixth novel by author John Green. The title is inspired by Act 1, Scene 2 of Shakespeare's play Julius Caesar, in which the nobleman Cassius says to Brutus: 'The fault, dear Brutus, is not in our stars, / But in ourselves, that we are underlings'. The story is narrated by Hazel Grace Lancaster, a 16-year-old girl with thyroid cancer that has affected her lungs.",
        "bkpages":313,
        "bkprice":250,
        "bkimage":"https://images-na.ssl-images-amazon.com/images/I/51BYcXvTimL._SX332_BO1,204,203,200_.jpg"
    },
    {
        "bkid":"E04",
        "bktitle":"THE STORY OF MY EXPERIMENTS WITH TRUTH",
        "bkauthor":"Mohandas K. Gandhi",
        "bkcategory":"Autobiography",
        "bkdescptn":"The Story of My Experiments with Truth is the autobiography of Mohandas K. Gandhi, covering his life from early childhood through to 1921. It was written in weekly installments and published in his journal Navjivan from 1925 to 1929. Its English translation also appeared in installments in his other journal Young India.[1] It was initiated at the insistence of Swami Anand and other close co-workers of Gandhi, who encouraged him to explain the background of his public campaigns. In 1999, the book was designated as one of the '100 Best Spiritual Books of the 20th Century' by a committee of global spiritual and religious authorities.",
        "bkpages":390,
        "bkprice":250,
        "bkimage":"https://images-eu.ssl-images-amazon.com/images/I/51GtJOp1OtL.jpg"
    },
    {
        "bkid":"E05",
        "bktitle":"PRIDE AND PREJUDICE",
        "bkauthor":"Jane Austen",
        "bkcategory":"Romance",
        "bkdescptn":"Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book, who learns about the repercussions of hasty judgments and eventually comes to appreciate the difference between superficial goodness and actual goodness. A classic piece filled with comedy, its humor lies in its honest depiction of manners, education, marriage and money during the Regency era in Great Britain.",
        "bkpages":390,
        "bkprice":250,
        "bkimage":"https://images-na.ssl-images-amazon.com/images/I/51WytTF0BwL._SY445_.jpg"
    },
    {
        "bkid":"E02",
        "bktitle":"THE PALACE OF ILLUSIONS",
        "bkauthor":"Chitra Banerjee",
        "bkcategory":"Mythology",
        "bkdescptn":"The Palace of Illusions is a 2008 novel by award-winning novelist and poet Chitra Banerjee Divakaruni. It was released by Picador. The novel is a rendition of the Hindu epic Mahabharata as told from Draupadi's (Panchaali's) viewpoint, namely, that of a woman living in a patriarchal world. As Booklist summarizes the plot, Smart, resilient, and courageous Panchaali, born of fire, marries all five of the famously heroic Pandava brothers, harbors a secret love, endures a long exile in the wilderness, instigates a catastrophic war, and slowly learns the truth about Krishna, her mysterious friend.",
        "bkpages":490,
        "bkprice":350,
        "bkimage":"https://images-na.ssl-images-amazon.com/images/I/A1fPTEf2nKL.jpg"
    },
    
    {
        "bkid":"E06",
        "bktitle":"THE NOTEBOOK",
        "bkauthor":"Nicholas Spark",
        "bkcategory":"Romance",
        "bkdescptn":"The Notebook is a 1996 romantic novel by American novelist Nicholas Sparks, The novel was later adapted into a popular film of the same name, in 2004. The Indian Bollywood film, Zindagi Tere Naam, starring Mithun Chakraborty, is also based on it.",
        "bkpages":214,
        "bkprice":250,
        "bkimage":"https://images-na.ssl-images-amazon.com/images/I/51VgLjmq9IL.jpg"
    },
    {
        "bkid":"E07",
        "bktitle":"THE SECRETS OF THE NAGAS",
        "bkauthor":"Amish Tripathi",
        "bkcategory":"Mythology",
        "bkdescptn":"The Secret of the Nagas is the second novel of the Shiva trilogy series by the Indian author Amish Tripathi. The story takes place in the imaginary land of Meluha and narrates how the inhabitants of that land are saved from their wars by a nomad named Shiva. It begins from where its predecessor, The Immortals of Meluha, left off, with Shiva trying to save Sati from the invading Naga. Later Shiva takes his troop of soldiers and travels far east to the land of Branga, where he wishes to find a clue to reach the Naga people. Shiva also learns that Sati's first child is still alive, as well as her twin sister. His journey ultimately leads him to the Naga capital of Panchavati, where he finds a surprise waiting for him.",
        "bkpages":396,
        "bkprice":237,
        "bkimage":"https://images-na.ssl-images-amazon.com/images/I/51nvQhEmAtL._SX323_BO1,204,203,200_.jpg"
    },
    {
        "bkid":"E08",
        "bktitle":"THE BEAUTIFUL DISASTER",
        "bkauthor":"Jamie Mcguire",
        "bkcategory":"Romance",
        "bkdescptn":"Beautiful Disaster is a novel by American author Jamie McGuire. It appeared first on the New York Times Best Seller list as a self-published novel in 2012.[2] Beautiful Disaster was originally self-published in May 2011, then acquired by Atria Books of Simon & Schuster and re-released in August 2012.[3] It has been translated into over fifty languages worldwide.",
        "bkpages":390,
        "bkprice":250,
        "bkimage":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1358259032l/11505797.jpg"
    },
    {
        "bkid":"E09",
        "bktitle":"WINGS OF FIRE",
        "bkauthor":"APJ Abdul Kalam",
        "bkcategory":"Autobiography",
        "bkdescptn":"Wings of Fire: An Autobiography of A P J Abdul Kalam (1999), former President of India. It was written by Dr. Kalam and Arun Tiwari.[1] Kalam examines his early life, effort, hardship, fortitude, luck and chance that eventually led him to lead Indian space research, nuclear and missile programs.",
        "bkpages":230,
        "bkprice":250,
        "bkimage":"https://images-na.ssl-images-amazon.com/images/I/51wbVQTpTgL._SX339_BO1,204,203,200_.jpg"
    },
    {
        "bkid":"E10",
        "bktitle":"THE DIARY OF A YOUNG GIRL",
        "bkauthor":"Anne Frank",
        "bkcategory":"Autobiography",
        "bkdescptn":"The Diary of a Young Girl, also known as The Diary of Anne Frank, is a book of the writings from the Dutch language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands. The family was apprehended in 1944, and Anne Frank died of typhus in the Bergen-Belsen concentration camp in 1945. The diary was retrieved by Miep Gies, who gave it to Anne's father, Otto Frank, the family's only known survivor, just after the war was over. The diary has since been published in more than 60 languages.",
        "bkpages":390,
        "bkprice":250,
        "bkimage":"diaryof young girl.jpg"
    },
    {
        "bkid":"E11",
        "bktitle":"YAJNASENI",
        "bkauthor":"Pratibha Ray",
        "bkcategory":"Mythology",
        "bkdescptn":"Yajnaseni: the story of Draupadi is an award-winning 1984 Odia language novel by Pratibha Ray. The story revolves around Draupadi from the famous epic Mahabharatha. The word Yajnaseni means a woman born out of fire. The book has been translated into various languages, including English, Hindi, Malayalam, Marathi, Assamese, Bengali, Nepali and Hungarian.",
        "bkpages":350,
        "bkprice":350,
        "bkimage":"https://images.gr-assets.com/books/1475430350l/1829763.jpg"
    },
    {
        "bkid":"E12",
        "bktitle":"THE WITNESS OF PROSECUTION",
        "bkauthor":"Agatha Christie",
        "bkcategory":"Thriller",
        "bkdescptn":"'The Witness for the Prosecution' is a short story and play by British author Agatha Christie. The story was initially published as 'Traitor's Hands' in Flynn's, a weekly pulp magazine, in the edition of 31 January 1925.[1] In 1933, the story was published for the first time as 'Witness for the Prosecution' in the collection The Hound of Death that appeared only in the United Kingdom. In 1948, it was finally published in the United States in the collection The Witness for the Prosecution and Other Stories.",
        "bkpages":390,
        "bkprice":250,
        "bkimage":"https://images-na.ssl-images-amazon.com/images/I/81w%2BVFp451L.jpg"
    },
    {
        "bkid":"E13",
        "bktitle":"TELL ME YOUR DREAMS",
        "bkauthor":"Sidney Sheldon",
        "bkcategory":"Thriller",
        "bkdescptn":"Tell Me Your Dreams is a 1998 novel by American writer Sidney Sheldon.",
        "bkpages":390,
        "bkprice":250,
        "bkimage":"https://images-eu.ssl-images-amazon.com/images/I/51OAEn0DQeL.jpg"
    },
    {
        "bkid":"E14",
        "bktitle":"AND THEN THERE WERE NONE",
        "bkauthor":"Agatha Christie",
        "bkcategory":"Thriller",
        "bkdescptn":"And Then There Were None is a mystery novel by English writer Agatha Christie, described by her as the most difficult of her books to write.[2] It was first published in the United Kingdom by the Collins Crime Club on 6 November 1939, as Ten Little Niggers,[3] after the minstrel song, which serves as a major plot point.",
        "bkpages":390,
        "bkprice":250,
        "bkimage":"https://images-na.ssl-images-amazon.com/images/I/81B9LhCS2AL.jpg"
    },
    {
        "bkid":"E15",
        "bktitle":"ODYSSEY",
        "bkauthor":"Homer",
        "bkcategory":"Mythology",
        "bkdescptn":"The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other Homeric epic. The Odyssey is fundamental to the modern Western canon; it is the second-oldest extant work of Western literature, while the Iliad is the oldest. Scholars believe the Odyssey was composed near the end of the 8th century BC, somewhere in Ionia, the Greek coastal region of Anatolia.",
        "bkpages":432,
        "bkprice":450,
        "bkimage":"https://images-na.ssl-images-amazon.com/images/I/51UQHGmwJvL.jpg"
    }
];

router.get("/",function(req,res){
    res.render("authors",{
        ptitle:"Authors",
        nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"}],
        authorslist:author_array
    });
});
router.get("/:id",function(req,res){
    var id = req.params.id;
    console.log(id);
    console.log(author_array[id].bktitle);
    res.render("authors",{
        ptitle:"Authors",
        nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"}],
        book:author_array[id]
    });
});